import mockData from '../../__mock__/item.json';
import { calculateTotalPrice } from 'src/lib/utils';
import { create } from 'zustand';

interface FoodItem {
  name: string;
  description: string;
  initialPrice: number;
  image: string;
  imageAlt?: string;
  imageTitle?: string;
  sections: Section[];
}

interface Section {
  name: string;
  description: string;
  required: boolean;
  type: 'RADIO' | 'COUNTER' | 'CHECKBOX';
  singlePriced: boolean;
  isAddition: boolean;
  options: Option[];
}

interface Option {
  name: string;
  price?: number;
  discountPrice?: number;
}

interface TicketSelection {
  [key: string]: { price: number; quantity: number };
}

interface Ticket {
  id: number;
  name: string;
  total: number;
  quantity: number;
  selections: TicketSelection;
  observation?: string;
}

interface TicketStoreState {
  currentItem: FoodItem | null;
  currentTicket: Ticket | null;
  setCurrentItem: (item: FoodItem | null) => void;
  setCurrentTicket: (ticket: Ticket | null) => void;
  increaseTicketQuantity: () => void;
  decreaseTicketQuantity: () => void;
  addItem: (
    sectionName: string,
    optionName: string,
    price: number,
    quantity: number
  ) => void;
  updateSelection: (
    type: 'COUNTER' | 'RADIO' | 'CHECKBOX',
    sectionName: string,
    optionName: string,
    value: number,
    price: number
  ) => void;
  handleObservation: (observation: string) => void;
  setObservation: (observation: string) => void;
  observation: string;
}

export const useTicketStore = create<TicketStoreState>((set) => ({
  currentItem: {
    ...mockData.item,
    sections: mockData.item.sections.map((section) => ({
      ...section,
      options: section.options.map((option) => ({
        ...option,
        price: option.price ?? 0,
      })),
      type: section.type as 'RADIO' | 'COUNTER' | 'CHECKBOX',
    })),
  } as FoodItem,
  currentTicket: {
    id: Date.now(),
    name: mockData.item.name,
    total: mockData.item.initialPrice,
    quantity: 1,
    selections: {},
    observation: '',
  },
  setCurrentItem: (item) => set(() => ({ currentItem: item })),
  setCurrentTicket: (ticket) => set(() => ({ currentTicket: ticket })),
  increaseTicketQuantity: () =>
    set((state) => ({
      currentTicket: state.currentTicket
        ? { ...state.currentTicket, quantity: state.currentTicket.quantity + 1 }
        : null,
    })),
  decreaseTicketQuantity: () =>
    set((state) => ({
      currentTicket:
        state.currentTicket && state.currentTicket.quantity > 1
          ? {
              ...state.currentTicket,
              quantity: state.currentTicket.quantity - 1,
            }
          : state.currentTicket,
    })),
  addItem: (sectionName, optionName, price) =>
    set((state) => {
      const newSelections = { ...state.currentTicket?.selections };
      const currentQuantity =
        newSelections[sectionName]?.[optionName]?.quantity || 0;
      newSelections[sectionName] = {
        ...(newSelections[sectionName] || {}),
        [optionName]: { price, quantity: currentQuantity + 1 },
      };

      const newTotal = calculateTotalPrice(newSelections);

      return {
        ...state,
        currentTicket: {
          ...state.currentTicket,
          selections: newSelections,
          total: newTotal,
        },
      };
    }),
  updateSelection: (type, sectionName, optionName, value, price) =>
    set((state) => {
      if (!state.currentTicket) return {};

      const selections = { ...state.currentTicket.selections };

      switch (type) {
        case 'RADIO':
          selections[sectionName] = {
            [optionName]: { price, quantity: value },
          };
          console.log(selections);
          break;
        case 'CHECKBOX':
          if (value) {
            selections[sectionName] = {
              ...selections[sectionName],
              [optionName]: { price, quantity: 1 },
            };
          } else {
            if (selections[sectionName]) {
              delete selections[sectionName][optionName];
              if (Object.keys(selections[sectionName]).length === 0) {
                delete selections[sectionName];
              }
            }
          }
          console.log(selections);
          break;
        case 'COUNTER':
          if (!selections[sectionName]) selections[sectionName] = {};
          selections[sectionName][optionName] = { price, quantity: value };
          console.log(selections);
          break;
        default:
          console.warn(`Unsupported type: ${type}`);
      }

      const newTotal = calculateTotalPrice(selections);

      return {
        ...state,
        currentTicket: {
          ...state.currentTicket,
          selections,
          total: newTotal,
        },
      };
    }),

  observation: '',

  setObservation: (observation: string) => set({ observation }),

  handleObservation: (observation) =>
    set((state) => ({
      currentTicket: state.currentTicket
        ? { ...state.currentTicket, observation }
        : null,
    })),
}));

import { data as mockData } from '@mocks/itens';
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
  [sectionName: string]: {
    [optionName: string]: { price: number; quantity: number };
  };
}

interface Ticket {
  id: number;
  name: string;
  initialPrice: number;
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
  addMainItem: (
    sectionName: string,
    optionName: string,
    price: number,
    quantity: number
  ) => void;
  updateMainItemQuantity: (
    sectionName: string,
    optionName: string,
    newQuantity: number
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
    initialPrice: mockData.item.initialPrice,
    total: mockData.item.initialPrice,
    quantity: 0,
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
  addMainItem: (sectionName, optionName, price, quantity) =>
    set((state) => {
      const newSelections = { ...state.currentTicket?.selections };

      // Check if a main dish is already selected and if it's different from the current selection
      const existingMainDish = newSelections[sectionName];
      if (existingMainDish && !existingMainDish[optionName]) {
        // If a different main dish is selected, replace the existing one
        newSelections[sectionName] = { [optionName]: { price, quantity } };
      } else {
        // If the same main dish is selected, or if no main dish is selected, add or update the quantity
        const currentQuantity = existingMainDish?.[optionName]?.quantity || 0;
        newSelections[sectionName] = {
          ...(newSelections[sectionName] || {}),
          [optionName]: { price, quantity: currentQuantity + quantity },
        };
      }

      const newTotal = calculateTotalPrice(newSelections);

      return {
        ...state,
        currentTicket: {
          ...state.currentTicket,
          selections: newSelections,
          total: newTotal,
          // Update the total quantity of items in the ticket
          quantity: Object.values(newSelections).reduce(
            (acc, section) =>
              acc +
              Object.values(section).reduce(
                (acc, item) => acc + item.quantity,
                0
              ),
            0
          ),
        },
      };
    }),

  updateMainItemQuantity: (sectionName, optionName, newQuantity) =>
    set((state) => {
      if (!state.currentTicket || !state.currentItem) return {};

      const selections = { ...state.currentTicket.selections };
      const currentSection = state.currentItem.sections.find(
        (section) => section.name === sectionName
      );
      const itemPrice =
        currentSection?.options.find((option) => option.name === optionName)
          ?.price || 0;

      // If the section exists but the option is different, reset the section
      if (selections[sectionName] && !selections[sectionName][optionName]) {
        selections[sectionName] = {};
      }

      if (newQuantity > 0) {
        // Update or set the new item quantity and price
        selections[sectionName][optionName] = {
          price: itemPrice,
          quantity: newQuantity,
        };
      } else {
        // Remove the item if the quantity is zero or less
        delete selections[sectionName][optionName];
        // If the section is empty after deletion, remove the section as well
        if (Object.keys(selections[sectionName]).length === 0) {
          delete selections[sectionName];
        }
      }

      console.log(selections[sectionName]);

      // Calculate the new total price
      const newTotal = calculateTotalPrice(selections);

      // Calculate the new total quantity
      const newQuantityTotal = Object.values(selections).reduce(
        (acc, section) =>
          acc +
          Object.values(section).reduce((acc, item) => acc + item.quantity, 0),
        0
      );

      return {
        ...state,
        currentTicket: {
          ...state.currentTicket,
          selections,
          total: newTotal,
          quantity: newQuantityTotal,
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
          if (value > 0) {
            // If the counter value is greater than 0, update or create the option
            selections[sectionName] = {
              ...selections[sectionName],
              [optionName]: { price, quantity: value },
            };
          } else {
            // If the counter value is 0 or less, delete the option if it exists
            if (
              selections[sectionName] &&
              selections[sectionName][optionName]
            ) {
              delete selections[sectionName][optionName];

              // If the section becomes empty after deletion, delete the section as well
              if (Object.keys(selections[sectionName]).length === 0) {
                delete selections[sectionName];
              }
            }
          }

          console.log(selections[sectionName]);
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

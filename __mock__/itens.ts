export const data = {
  item: {
    name: 'Ceviche de salmão',
    description: 'salmão temperado com limão, cebola e pimenta',
    initialPrice: 20.0,
    image:
      'https://res.cloudinary.com/dvcywi3uf/image/upload/v1708968385/outros/fe-tests/food/main_dish_ceviche.jpg',
    imageAlt:
      'Ceviche de Salmão fresco com pedaços de salmão marinados, anéis de cebola roxa e cebolinha verde picada, temperado com limão, cebola e pimenta, servido em um prato branco.',
    imageTitle:
      'Ceviche de Salmão - um prato refrescante e cítrico perfeito como uma entrada leve.',
    sections: [
      {
        name: 'qual o tamanho?',
        description: 'escolha 1',
        required: true,
        type: 'RADIO',
        singlePriced: false,
        isAddition: false,
        DishName: 'main-dish',
        options: [
          {
            name: 'médio',
            dish: 'Ceviche de salmão',
            size: 'médio',
            price: 25.0,
            discountPrice: 20.0,
          },
          {
            name: 'grande',
            dish: 'Ceviche de salmão',
            size: 'grande',
            price: 30.0,
          },
        ],
      },
      {
        name: 'vai querer bebida?',
        description: 'escolha quantos quiser',
        required: false,
        type: 'COUNTER',
        singlePriced: false,
        isAddition: true,
        DishName: 'beverage',
        options: [
          {
            name: 'coca-cola',
            price: 5.0,
          },
          {
            name: 'suco prats laranja',
            price: 6.0,
          },
          {
            name: 'água sem gás',
            price: 3.0,
          },
        ],
      },
      {
        name: 'precisa de talher?',
        description: 'escolha até 1',
        required: false,
        singlePriced: true,
        type: 'RADIO',
        isAddition: true,
        DishName: 'side-dish',
        options: [
          {
            name: 'hashi',
            price: 0.0,
          },
          {
            name: 'garfo e faca descartável',
            price: 1.0,
          },
        ],
      },
      {
        name: 'mais alguma coisa?',
        description: 'escolha até 2',
        required: false,
        type: 'CHECKBOX',
        singlePriced: false,
        isAddition: true,
        DishName: 'extra',
        options: [
          {
            name: 'biscoito da sorte',
            price: 2.0,
          },
          {
            name: 'rolinho primavera',
            price: 8.0,
          },
        ],
      },
    ],
  },
};

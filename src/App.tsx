import { useState } from 'react';

import Checkbox from '@components/inputs/checkbox';
import CounterComponent from '@components/inputs/counter';
import Radio from '@components/inputs/radio';
import Textarea from '@components/inputs/textarea';
import Footer from '@components/layout/footer';
import Header from '@components/layout/header';
import Tag from '@components/ui/tag/tag';

export const App = () => {
  const [selectedRadio, setSelectedRadio] = useState('');

  const [checkboxes, setCheckboxes] = useState<{ [key: string]: boolean }>({
    checkbox1: false,
    checkbox2: false,
  });

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxes((prev) => ({
      ...prev,
      [event.target.value]: event.target.checked,
    }));
  };
  return (
    <>
      <Header />
      <div className="w-full bg-white pt-20">
        <div className="container mx-auto">
          <div className="item-header py-6">
            <div className="mb-6 flex flex-row items-center gap-2 px-0">
              <img
                src="https://res.cloudinary.com/dvcywi3uf/image/upload/v1708968385/outros/fe-tests/food/avatar_matsuri.jpg"
                alt="Matsuri Logo"
                width={48}
                height={48}
                className="size-12 rounded-sm outline outline-1 -outline-offset-1 outline-white"
              />
              <h1 className="text-24 font-bold">Matsuri Concept</h1>
            </div>
            <div className="mx-12 flex flex-row items-stretch justify-between bg-white">
              <div className="flex flex-1 flex-col items-start justify-between pb-4">
                <div>
                  <h2 className="text-24 font-bold text-gray-700">
                    Ceviche de Salmão
                  </h2>
                  <div className="flex flex-row items-center gap-2">
                    <span className="text-16 font-bold text-gray-500">
                      a partir de
                    </span>
                    <span className="text-20 font-extrabold text-primary">
                      R$ 19,90
                    </span>
                  </div>
                  <p className="text-16 font-semibold text-gray-500">
                    salmão temperado com limão, cebola e pimenta
                  </p>
                </div>
                <div className="flex w-80 flex-row items-start justify-between">
                  <div className="flex flex-col">
                    <span className="text-16 font-bold text-gray-700">
                      quantos?
                    </span>
                    <p className="flex flex-row items-center gap-1 text-14">
                      total:
                      <span className="font-extrabold">R$ 19,90</span>
                    </p>
                  </div>
                  <CounterComponent
                    counter={1}
                    decreaseFunction={() => {}}
                    increaseFunction={() => {}}
                    size="large"
                    showTrashIcon
                  />
                </div>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dvcywi3uf/image/upload/v1708968385/outros/fe-tests/food/main_dish_ceviche.jpg"
                  alt="Ceviche de Salmão fresco com pedaços de salmão marinados, anéis de cebola roxa e cebolinha verde picada, temperado com limão, cebola e pimenta, servido em um prato branco."
                  title="Ceviche de Salmão - um prato refrescante e cítrico perfeito como uma entrada leve."
                  className="rounded-xl border border-white"
                  width={390}
                  height={195}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <fieldset className="item-choose border-t-4 border-gray-300 px-5 py-14">
        <div className="container px-12">
          <div className="flex flex-row items-center justify-between gap-2 px-0">
            <div className="mb-6 flex flex-col">
              <legend className="text-16 font-bold">qual o tamanho?</legend>
              <small className="text-12">escolha 1</small>
            </div>
            <Tag text="obrigatório" />
          </div>
          <div className="grid grid-cols-3 gap-20">
            <div className="flex flex-row items-center justify-between gap-2">
              <Radio
                name="sizeGroup"
                label="médio"
                value="medium"
                isChecked={selectedRadio === 'medium'}
                onChange={handleRadioChange}
                isdiscountPrice
              />
              <p className="flex flex-row items-center gap-1">
                <span className="text-12">de R$ 22,90 por</span>{' '}
                <span className="text-14 text-green-500">R$ 19,90</span>
              </p>
            </div>
            <div className="flex flex-row items-center justify-between gap-2">
              <Radio
                name="sizeGroup"
                label="grande"
                value="large"
                isChecked={selectedRadio === 'large'}
                onChange={handleRadioChange}
              />
              <span className="text-14 text-primary">R$ 28,90</span>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="item-choose border-t-4 border-gray-300 px-5 py-14">
        <div className="container px-12">
          <div className="flex flex-row items-center justify-between gap-2 px-0">
            <div className="mb-6 flex flex-col">
              <legend className="text-16 font-bold">vai querer bebida?</legend>
              <small className="text-12">escolha quantos quiser</small>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-20">
            <div className="flex flex-row items-center justify-between gap-2">
              <div className="flex flex-row items-center gap-2">
                <CounterComponent
                  counter={0}
                  decreaseFunction={() => {}}
                  increaseFunction={() => {}}
                  size="small"
                  showTrashIcon
                />
                coca-cola
              </div>
              <span className="text-primary">+ R$ 10,00</span>
            </div>
            <div className="flex flex-row items-center justify-between gap-2">
              <div className="flex flex-row items-center gap-2">
                <CounterComponent
                  counter={0}
                  decreaseFunction={() => {}}
                  increaseFunction={() => {}}
                  size="small"
                  showTrashIcon
                />
                suco prates laranja
              </div>
              <span className="text-primary">+ R$ 6,00</span>
            </div>
            <div className="flex flex-row items-center justify-between gap-2">
              <div className="flex flex-row items-center gap-2">
                <CounterComponent
                  counter={0}
                  decreaseFunction={() => {}}
                  increaseFunction={() => {}}
                  size="small"
                  showTrashIcon
                />
                água sem gás
              </div>
              <span className="text-primary">+ R$ 3,00</span>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="item-choose border-t-4 border-gray-300 px-5 py-14">
        <div className="container px-12">
          <div className="flex flex-row items-center justify-between gap-2 px-0">
            <div className="mb-6 flex flex-col">
              <legend className="text-16 font-bold">precisa de talher?</legend>
              <small className="text-12">escolha até 1</small>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-20">
            <div className="flex flex-row items-center justify-between gap-2">
              <Radio
                name="extraGroup"
                label="hashi"
                value="hashi"
                isChecked={selectedRadio === 'hashi'}
                onChange={handleRadioChange}
              />
            </div>
            <div className="flex flex-row items-center justify-between gap-2">
              <Radio
                name="extraGroup"
                label="garfo e faca descartável"
                value="garfo"
                isChecked={selectedRadio === 'garfo'}
                onChange={handleRadioChange}
              />
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="item-choose border-t-4 border-gray-300 px-5 py-14">
        <div className="container px-12">
          <div className="flex flex-row items-center justify-between gap-2 px-0">
            <div className="mb-6 flex flex-col">
              <legend className="text-16 font-bold">mais alguma coisa?</legend>
              <small className="text-12">escolha até 2</small>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-20">
            <div className="flex flex-row items-center justify-between gap-2">
              <Checkbox
                label="biscoito da sorte"
                value="checkbox1"
                isChecked={checkboxes['checkbox1']}
                onChange={handleCheckboxChange}
              />
              <span className="text-primary">+ R$ 2,00</span>
            </div>
            <div className="flex flex-row items-center justify-between gap-2">
              <Checkbox
                label="rolinho primavera"
                value="checkbox2"
                isChecked={checkboxes['checkbox2']}
                onChange={handleCheckboxChange}
              />
              <span className="text-primary">+ R$ 8,00</span>
            </div>
          </div>
        </div>
      </fieldset>
      <Textarea />
      <Footer />
    </>
  );
};

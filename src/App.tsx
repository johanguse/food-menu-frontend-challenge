import { useState } from 'react';

import TicketIcon from '@assets/icons/ticket.svg?react';
import UserIcon from '@assets/icons/user.svg?react';
import Button from '@components/button';
import Checkbox from '@components/checkbox';
import CounterComponent from '@components/counter';
import Footer from '@components/layout/footer';
import Header from '@components/layout/header';
import MinusButtonComponent from '@components/minus-button';
import PlusButtonComponent from '@components/plus-button';
import Radio from '@components/radio';

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
      <div className="container mx-auto text-lg font-semibold text-green-500">
        <div className="bg-purple-700">
          <div className="px-0 py-10">Head</div>
          <div className="mx-12 bg-white">Ceviche Salmão</div>
        </div>
        <div className="mt-10 p-10">
          <form>
            <fieldset>
              <legend>Choose an option:</legend>
              <Radio
                name="radioGroup"
                label="Option 1"
                value="option1"
                checked={selectedRadio === 'option1'}
                onChange={handleRadioChange}
              />
              <Radio
                name="radioGroup"
                label="Option 2"
                value="option2"
                checked={selectedRadio === 'option2'}
                onChange={handleRadioChange}
              />
            </fieldset>

            <fieldset>
              <legend>Select your preferences:</legend>
              <Checkbox
                label="Checkbox 1"
                value="checkbox1"
                checked={checkboxes['checkbox1']}
                onChange={handleCheckboxChange}
              />
              <Checkbox
                label="Checkbox 2"
                value="checkbox2"
                checked={checkboxes['checkbox2']}
                onChange={handleCheckboxChange}
              />
            </fieldset>
          </form>
        </div>
        <div className="px-10 py-20">
          <div className="mb-20 flex items-center justify-start gap-4">
            <Button
              buttonStyle={{ variant: 'secondary' }}
              leftIcon={<TicketIcon className="size-6" />}>
              ver ticket
            </Button>
            <Button
              buttonStyle={{ variant: 'primary' }}
              leftIcon={<UserIcon className="size-6" />}>
              entrar
            </Button>
            <Button
              disabled={true}
              isLoading
              buttonStyle={{ variant: 'primary' }}>
              entrar
            </Button>
            <Button buttonStyle={{ variant: 'secondary' }}>entrar</Button>
          </div>
          <div className="mb-10 flex flex-row gap-4">
            <div className="mx-6">
              <MinusButtonComponent decreaseFunction={() => {}} />
              <MinusButtonComponent disabled decreaseFunction={() => {}} />
            </div>
            <div className="mx-6">
              <MinusButtonComponent size="large" decreaseFunction={() => {}} />
              <MinusButtonComponent
                size="large"
                disabled
                decreaseFunction={() => {}}
              />
            </div>
          </div>
          <div className="mb-10 flex flex-row gap-4">
            <div className="mx-6">
              <PlusButtonComponent increaseFunction={() => {}} />
              <PlusButtonComponent disabled increaseFunction={() => {}} />
            </div>
            <div className="mx-6">
              <PlusButtonComponent size="large" increaseFunction={() => {}} />
              <PlusButtonComponent
                size="large"
                disabled
                increaseFunction={() => {}}
              />
            </div>
          </div>
          <div className="mb-10 flex flex-row gap-4">
            <CounterComponent
              counter={0}
              decreaseFunction={() => {}}
              increaseFunction={() => {}}
            />
            <CounterComponent
              counter={0}
              decreaseFunction={() => {}}
              increaseFunction={() => {}}
              showTrashIcon
            />
            <CounterComponent
              counter={0}
              decreaseFunction={() => {}}
              increaseFunction={() => {}}
              size="large"
            />
            <CounterComponent
              counter={0}
              decreaseFunction={() => {}}
              increaseFunction={() => {}}
              size="large"
              showTrashIcon
            />
          </div>
          <div className="mb-10 flex flex-row gap-4">
            <CounterComponent
              counter={2}
              decreaseFunction={() => {}}
              increaseFunction={() => {}}
              size="large"
              showTrashIcon
            />
            <CounterComponent
              counter={3}
              decreaseFunction={() => {}}
              increaseFunction={() => {}}
              size="small"
              showTrashIcon
            />
            <CounterComponent
              counter={0}
              decreaseFunction={() => {}}
              increaseFunction={() => {}}
              size="large"
              showTrashIcon
            />
            <CounterComponent
              counter={1}
              decreaseFunction={() => {}}
              increaseFunction={() => {}}
              size="large"
              showTrashIcon
            />
            <CounterComponent
              counter={1}
              decreaseFunction={() => {}}
              increaseFunction={() => {}}
              size="small"
              showTrashIcon
            />
          </div>
        </div>
        <div className="flex w-full">
          <textarea
            name="observacao"
            id="observacao"
            placeholder={
              'alguma observação do item? • opcional\nex: tirar algum ingrediente, ponto do prato'
            }
            className="mx-auto w-[644px] resize-none rounded-[4px] border p-2 text-sm text-gray-700 placeholder:text-sm placeholder:font-normal placeholder:text-gray-400"
            rows={2}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

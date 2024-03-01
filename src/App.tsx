import FieldsetComponent from '@components/fieldset';
import HeaderItem from '@components/header-item';
import Textarea from '@components/inputs/textarea';
import Footer from '@components/layout/footer';
import Header from '@components/layout/header';
import { useTicketStore } from '@stores/ticket';

export const App = () => {
  const { currentItem, updateSelection } = useTicketStore();

  const renderSections = () => {
    return currentItem?.sections.map((section) => {
      const sectionType = section.type as 'RADIO' | 'COUNTER' | 'CHECKBOX';

      return (
        <FieldsetComponent
          key={section.name}
          legend={section.name}
          description={section.description}
          required={section.required}
          type={sectionType}
          isAddition={section.isAddition}
          options={section.options.map((option) => ({
            label: option.name,
            value: option.name,
            price: option.price ?? 0,
            discountPrice: option.discountPrice,
            onRadioChange: () =>
              updateSelection(
                'RADIO',
                section.name,
                option.name,
                1,
                option.price ?? 0
              ),
            onCheckboxChange: (checked: boolean) =>
              updateSelection(
                'CHECKBOX',
                section.name,
                option.name,
                checked ? 1 : 0,
                option.price ?? 0
              ),
            onCounterChange: (count: number) =>
              updateSelection(
                'COUNTER',
                section.name,
                option.name,
                count,
                option.price ?? 0
              ),
          }))}
        />
      );
    });
  };

  return (
    <>
      <Header />
      <HeaderItem />
      {currentItem && renderSections()}
      <Textarea />
      <Footer />
    </>
  );
};

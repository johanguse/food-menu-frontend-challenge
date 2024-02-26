import CompanyLogo from '@assets/icons/aiqfome_logo.svg';
import ArrowRight from '@assets/icons/arrow_right.svg';
import LocationIcon from '@assets/icons/location.svg';
import SearchIcon from '@assets/icons/search.svg';
import TicketIcon from '@assets/icons/ticket.svg?react';
import UserIcon from '@assets/icons/user.svg?react';
import Button from '@components/button';

export default function Header() {
  const address = 'Rua Mandaguari, 198';

  return (
    <header id="header" className="w-full bg-primary py-5">
      <div className="container mx-auto grid grid-cols-3 items-center">
        <div className="flex items-center gap-12">
          <img src={CompanyLogo} alt="Company Logo" width={73} height={40} />
          <div className="flex items-center gap-4">
            <img src={LocationIcon} alt="Location" className="size-6" />
            <div>
              <div className="text-xs font-bold text-purple-50">
                entregando em
              </div>
              <button className="flex items-center gap-1 text-base font-bold text-white">
                {address}
                <img src={ArrowRight} alt="Arrow Right" className="size-3" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative">
            <img
              src={SearchIcon}
              alt="Search Icon"
              className="absolute bottom-0 left-14 top-0 my-auto size-6"
            />
            <input
              type="text"
              placeholder="busque pela loja ou culinária"
              className="ml-12 flex w-[420px] items-center gap-2 rounded-md border border-gray-400 bg-white p-2 pl-10 pr-4 text-sm font-semibold"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-4">
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
        </div>
      </div>
    </header>
  );
}

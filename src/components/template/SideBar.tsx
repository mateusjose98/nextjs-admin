import { BellIcon, HomeIcon, Logout, SettingsIcon } from '../icons';
import Logo from './Logo';
import SideBarItem from './SideBarItem';

export default function SideBar() {
  return (
    <aside className="flex flex-col">
      <div
        className={`flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800`}
      >
        <Logo />
      </div>
      <ul className="flex-grow ">
        <SideBarItem href="/" icon={HomeIcon} text="Início" />
        <SideBarItem href="/ajustes" icon={SettingsIcon} text="Ajustes" />
        <SideBarItem href="/notificacoes" icon={BellIcon} text="Notificações" />
      </ul>
      <ul>
        <SideBarItem
          icon={Logout}
          text="Sair"
          onClick={() => console.log('saiu')}
          className="hover:bg-red-500 hover:text-white text-red-500"
        />
      </ul>
    </aside>
  );
}

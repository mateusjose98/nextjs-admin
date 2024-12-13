import globalData from '@/data/hooks/useAppData';
import Content from './Content';
import SideBar from './SideBar';
import TopBar from './TopBar';

interface LayoutProps {
  title: string;
  subheading: string;
  children: any;
}

export default function Layout(props: LayoutProps) {
  const { changeTheme, theme } = globalData();

  return (
    <div
      className={`
      ${theme}
      flex
      w-screen
    `}
    >
      <SideBar />

      <div className={`flex flex-col p-7 bg-gray-300 dark:bg-gray-800 flex-1`}>
        <TopBar title={props.title} subheading={props.subheading} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}

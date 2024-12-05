import Content from './Content';
import SideBar from './SideBar';
import TopBar from './TopBar';

interface LayoutProps {
  title: string;
  subheading: string;
  children: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`
      dark
      flex
      h-screen
      w-screen
    `}
    >
      <SideBar />
      <div
        className={`flex flex-column w-full p-7 bg-gray-300 dark:bg-gray-800`}
      >
        <TopBar title={props.title} subheading={props.subheading} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}

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
    <div>
      <SideBar />
      <TopBar title={props.title} subheading={props.subheading} />
      <Content>{props.children}</Content>
    </div>
  );
}

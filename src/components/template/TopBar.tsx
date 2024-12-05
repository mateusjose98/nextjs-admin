import Title from './Title';

interface TopBarProps {
  title: string;
  subheading: string;
}

export default function TopBar(props: TopBarProps) {
  return (
    <div>
      <Title title={props.title} subheading={props.subheading} />
    </div>
  );
}

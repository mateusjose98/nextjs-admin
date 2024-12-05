interface TitleProps {
  title: string;
  subheading: string;
}

export default function Title(props: TitleProps) {
  return (
    <div>
      <h1 className="font-black text-3xl text-gray-900">{props.title}</h1>
      <h2 className="text-sm font-ligth text-gray-600">{props.subheading}</h2>
    </div>
  );
}

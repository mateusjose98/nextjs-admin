interface TitleProps {
  title: string;
  subheading: string;
}

export default function Title(props: TitleProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{props.title}</h1>
      <h2 className="text-sm text-gray-600">{props.subheading}</h2>
    </div>
  );
}

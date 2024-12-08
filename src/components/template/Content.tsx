interface ContentProps {
  children?: any;
}

export default function Content(props: ContentProps) {
  return (
    <div className={`flex flex-col mt-7 ml-64 dark:text-gray-100`}>
      {props.children}
    </div>
  );
}

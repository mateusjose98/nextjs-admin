interface ContentProps {
  children?: any;
}

export default function Content(props: ContentProps) {
  return (
    <div
      className={`flex flex-col mt-7 dark:text-gray-100 dark:bg-gray-700 p-4 rounded-lg`}
    >
      {props.children}
    </div>
  );
}

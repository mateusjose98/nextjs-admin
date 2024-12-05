import Link from 'next/link';

interface SideBarItemProps {
  icon: any;
  text: string;
  href?: string;
  onClick?: (evento: any) => void;
  className?: string;
}

export default function SideBarItem(props: SideBarItemProps) {
  function renderLink() {
    return (
      <a
        className={`flex flex-col text-gray-600 justify-center items-center h-20 w-20 ${props.className}`}
      >
        {props.icon}
        <span className={`text-sm font-lignt `}>{props.text}</span>
      </a>
    );
  }
  return (
    <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer`}>
      {props.href ? (
        <Link legacyBehavior href={props.href}>
          {renderLink()}
        </Link>
      ) : (
        renderLink()
      )}
    </li>
  );
}

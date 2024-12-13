import globalData from '@/data/hooks/useAppData';
import ChangeThemeButton from './ChangeThemeButton';
import Title from './Title';
import UserAvatar from './UserAvatar';

interface TopBarProps {
  title: string;
  subheading: string;
}

export default function TopBar(props: TopBarProps) {
  const { theme, changeTheme } = globalData();
  return (
    <div className="flex ml-20">
      <Title title={props.title} subheading={props.subheading} />

      <div className="flex flex-grow justify-end items-center">
        <ChangeThemeButton theme={theme} changeTheme={changeTheme} />
        <UserAvatar className="ml-3" />
      </div>
    </div>
  );
}

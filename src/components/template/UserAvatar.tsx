import Link from 'next/link';
// import useAuth from '../../data/hook/useAuth'

interface UserAvatarProps {
  className?: string;
}

export default function UserAvatar(props: UserAvatarProps) {
  const { user } = { user: { image: '/avatar.webp' } };
  return (
    <Link href="/perfil">
      <img
        src={user?.image ?? '/avatar.webp'}
        alt="Avatar do Usuário"
        className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${props.className}
                `}
      />
    </Link>
  );
}

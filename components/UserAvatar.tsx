import { Avatar } from "./ui/avatar";
import { User } from "next-auth";
import { AvatarProps } from "@radix-ui/react-avatar";
import Image from "next/image";
import { UserCircle } from "lucide-react";

type Props = Partial<AvatarProps> & {
  user: User | undefined;
};

function UserAvatar({ user, ...avatarProps }: Props) {
  return (
    <Avatar className="relative h-8 w-8" {...avatarProps}>
      {user?.image === undefined && <UserCircle />}
      {user?.image && (
        <Image
          src={user.image}
          fill
          alt={`${user?.name}'s profile picture`}
          className="rounded-full object-cover"
        />
      )}
    </Avatar>
  );
}

export default UserAvatar;

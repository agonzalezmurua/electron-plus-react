import React from "react";
import "twin.macro";

import Avatar from "@components/atoms/Avatar";
import InboxIn from "@assets/icons/outline/inbox-in.svg";

type UserHeaderProps = {
  firstName: string;
  lastName: string;
  role?: string;
};

const UserHeader: React.FunctionComponent<UserHeaderProps> = (props) => {
  return (
    <nav tw="flex items-center justify-between p-3 pl-6 pr-6 bg-gray-900 text-gray-400">
      {/* Actions */}
      <section tw="flex space-x-4">
        <InboxIn tw='w-6 h-6'/>
      </section>

      {/* User Info */}
      <div tw="flex space-x-4 items-center justify-end">
        <section tw="flex flex-col items-end">
          <strong>
            {props.firstName} {props.lastName}
          </strong>
          {props.role && <span tw="text-xs text-gray-600">{props.role}</span>}
        </section>
        <Avatar
          size="medium"
          src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale'"
        />
      </div>
    </nav>
  );
};

export default UserHeader;

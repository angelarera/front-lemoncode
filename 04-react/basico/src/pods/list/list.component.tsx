import React from "react";
import * as vm from "./list.vm";
import { Member, TableHeader } from "./components";

interface Props {
  members: vm.Member[];
  onSelect: (login: string) => void;
}

export const List: React.FC<Props> = (props) => {
  const { members, onSelect } = props;

  return (
    <>
      <div className="list-user-list-container">
        <TableHeader />
        {members.map((member) => (
          <Member
            data={member}
            key={member.id}
            onSelect={() => onSelect(member.login)}
          />
        ))}
      </div>
    </>
  );
};

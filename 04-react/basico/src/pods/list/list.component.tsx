import React from "react";
import * as vm from "./list.vm";
import { MembersContainer, MemberCard } from "./components";

interface Props {
  members: vm.Member[];
  onSelect: (login: string) => void;
}

export const List: React.FC<Props> = (props) => {
  const { members, onSelect } = props;

  return (
    <MembersContainer>
      {members.map((member) => (
        <MemberCard key={member.id} member={member} onSelect={onSelect} />
      ))}
    </MembersContainer>
  );
};

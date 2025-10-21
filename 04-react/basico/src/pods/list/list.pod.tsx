import React from "react";
import { Member } from "./list.vm";
import { List } from "./list.component";
import { getMembers } from "./api/api";
import { mapMembersToVM } from "./list.mapper";

interface Props {
  onSelect: (login: string) => void;
}

export const ListPod: React.FC<Props> = (props) => {
  const { onSelect } = props;
  const [members, setMembers] = React.useState<Member[]>([]);

  React.useEffect(() => {
    getMembers().then(mapMembersToVM).then(setMembers);
  }, []);

  return <List members={members} onSelect={onSelect} />;
};

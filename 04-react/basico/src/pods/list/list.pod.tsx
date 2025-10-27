import React from "react";
import { Member } from "./list.vm";
import { List } from "./list.component";
import { getMembers } from "./api/api";
import { mapMembersToVM } from "./list.mapper";
import { Search } from "./components";
import { ListContext } from "./list.context";

interface Props {
  onSelect: (login: string, org?: string) => void;
}

export const ListPod: React.FC<Props> = (props) => {
  const { onSelect } = props;
  const { organization } = React.useContext(ListContext);
  const [members, setMembers] = React.useState<Member[]>([]);

  React.useEffect(() => {
    getMembers(organization).then(mapMembersToVM).then(setMembers);
  }, [organization]);

  const handleSearch = () => {
    getMembers(organization).then(mapMembersToVM).then(setMembers);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <List members={members} onSelect={onSelect} currentOrg={organization} />
    </>
  );
};

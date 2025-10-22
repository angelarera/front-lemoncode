import React from "react";
import { Member } from "./list.vm";
import { List } from "./list.component";
import { getMembers } from "./api/api";
import { mapMembersToVM } from "./list.mapper";
import { Search } from "./components";

interface Props {
  onSelect: (login: string) => void;
}

export const ListPod: React.FC<Props> = (props) => {
  const { onSelect } = props;
  const [members, setMembers] = React.useState<Member[]>([]);
  const [organization, setOrganization] = React.useState("lemoncode");

  React.useEffect(() => {
    getMembers(organization).then(mapMembersToVM).then(setMembers);
  }, [organization]);

  const handleSearch = () => {
    getMembers(organization).then(mapMembersToVM).then(setMembers);
  };

  return (
    <>
      <Search
        organization={organization}
        onOrganizationChange={setOrganization}
        onSearch={handleSearch}
      />
      <List members={members} onSelect={onSelect} />
    </>
  );
};

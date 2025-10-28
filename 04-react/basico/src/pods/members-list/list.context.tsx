import React from "react";

interface ListContextModel {
  organization: string;
  setOrganization: (org: string) => void;
}

export const ListContext = React.createContext<ListContextModel>({
  organization: "lemoncode",
  setOrganization: () => {},
});

export const MembersListProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [organization, setOrganization] = React.useState("lemoncode");

  return (
    <ListContext.Provider value={{ organization, setOrganization }}>
      {children}
    </ListContext.Provider>
  );
};

import { Member } from "./api.model";

export const getMembers = (
  organization: string = "Lemoncode"
): Promise<Member[]> => {
  return fetch(`https://api.github.com/orgs/${organization}/members`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    }
  );
};

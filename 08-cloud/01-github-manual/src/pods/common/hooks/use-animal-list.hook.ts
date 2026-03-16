import React from "react";
import { PictureInfo as VMPictureInfo } from "../animal-list.vm";
import { PictureInfo as ApiPictureInfo } from "../api/api.model";
import { CartContext } from "@/core/context";

interface UseAnimalListProps {
  fetchPictures: () => Promise<ApiPictureInfo[]>;
  mapToVM: (data: ApiPictureInfo[]) => VMPictureInfo[];
}

export const useAnimalList = ({
  fetchPictures,
  mapToVM,
}: UseAnimalListProps) => {
  const [pictures, setPictures] = React.useState<VMPictureInfo[]>([]);
  const { selectedIds, setAllAnimals } = React.useContext(CartContext);

  React.useEffect(() => {
    fetchPictures().then((apiPictures) => {
      const mappedPictures = mapToVM(apiPictures);

      const syncedPictures = mappedPictures.map((picture) => ({
        ...picture,
        selected: selectedIds.includes(picture.id),
      }));
      setPictures(syncedPictures);

      setAllAnimals((prev) => {
        const existingIds = new Set(prev.map((animal) => animal.id));
        const newAnimals = apiPictures.filter(
          (animal) => !existingIds.has(animal.id)
        );
        return [...prev, ...newAnimals];
      });
    });
  }, [selectedIds, setAllAnimals, fetchPictures, mapToVM]);

  return { pictures };
};

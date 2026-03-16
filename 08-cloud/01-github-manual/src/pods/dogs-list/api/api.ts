import { PictureInfo } from "@/pods/common/api";

export const mockedPictures: PictureInfo[] = [
  {
    id: "5",
    picUrl: "/img/dogs/cool-dog-1.webp",
    title: "Cool dog A",
  },
  {
    id: "6",
    picUrl: "/img/dogs/cool-dog-2.webp",
    title: "Cool dog B",
  },
  {
    id: "7",
    picUrl: "/img/dogs/cool-dog-3.webp",
    title: "Cool dog C",
  },
  {
    id: "8",
    picUrl: "/img/dogs/cool-dog-4.webp",
    title: "Cool dog D",
  },
];

export const getPictures = (): Promise<PictureInfo[]> => {
  return Promise.resolve(mockedPictures);
};

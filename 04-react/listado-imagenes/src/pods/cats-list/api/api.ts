import { PictureInfo } from "@/pods/common/api";

export const mockedPictures: PictureInfo[] = [
  {
    id: "1",
    picUrl: "/img/cats/cool-cat-1.webp",
    title: "Cool cat A",
  },
  {
    id: "2",
    picUrl: "/img/cats/cool-cat-2.webp",
    title: "Cool cat B",
  },
  {
    id: "3",
    picUrl: "/img/cats/cool-cat-3.webp",
    title: "Cool cat C",
  },
  {
    id: "4",
    picUrl: "/img/cats/cool-cat-4.webp",
    title: "Cool cat D",
  },
];

export const getPictures = (): Promise<PictureInfo[]> => {
  return Promise.resolve(mockedPictures);
};

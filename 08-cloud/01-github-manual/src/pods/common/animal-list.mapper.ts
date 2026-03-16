import * as am from "./api/api.model";
import * as vm from "./animal-list.vm";

export const mapPictureToVM = (data: am.PictureInfo): vm.PictureInfo => ({
  id: data.id,
  picUrl: data.picUrl,
  title: data.title,
  selected: false,
});

export const mapPicturesToVM = (data: am.PictureInfo[]): vm.PictureInfo[] =>
  data.map((item) => mapPictureToVM(item));

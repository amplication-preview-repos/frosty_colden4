import { ImageModel as TImageModel } from "../api/imageModel/ImageModel";

export const IMAGEMODEL_TITLE_FIELD = "name";

export const ImageModelTitle = (record: TImageModel): string => {
  return record.name?.toString() || String(record.id);
};

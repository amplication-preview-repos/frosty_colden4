import { ImageModelWhereInput } from "./ImageModelWhereInput";
import { ImageModelOrderByInput } from "./ImageModelOrderByInput";

export type ImageModelFindManyArgs = {
  where?: ImageModelWhereInput;
  orderBy?: Array<ImageModelOrderByInput>;
  skip?: number;
  take?: number;
};

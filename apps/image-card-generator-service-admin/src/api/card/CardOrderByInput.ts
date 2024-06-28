import { SortOrder } from "../../util/SortOrder";

export type CardOrderByInput = {
  backgroundImageUrl?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  trendId?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type TrendOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  keyword?: SortOrder;
  popularity?: SortOrder;
  updatedAt?: SortOrder;
};

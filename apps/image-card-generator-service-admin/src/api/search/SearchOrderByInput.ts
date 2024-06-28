import { SortOrder } from "../../util/SortOrder";

export type SearchOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  keyword?: SortOrder;
  results?: SortOrder;
  updatedAt?: SortOrder;
};

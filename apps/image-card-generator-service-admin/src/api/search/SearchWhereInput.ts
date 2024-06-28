import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type SearchWhereInput = {
  id?: StringFilter;
  keyword?: StringNullableFilter;
  results?: JsonFilter;
};

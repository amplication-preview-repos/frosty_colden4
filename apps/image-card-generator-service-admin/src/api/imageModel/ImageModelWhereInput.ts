import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ImageModelWhereInput = {
  apiEndpoint?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};

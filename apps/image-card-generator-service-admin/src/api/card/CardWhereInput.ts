import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TrendWhereUniqueInput } from "../trend/TrendWhereUniqueInput";

export type CardWhereInput = {
  backgroundImageUrl?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  trend?: TrendWhereUniqueInput;
};

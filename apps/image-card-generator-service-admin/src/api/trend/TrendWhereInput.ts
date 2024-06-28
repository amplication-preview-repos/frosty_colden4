import { CardListRelationFilter } from "../card/CardListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TrendWhereInput = {
  cards?: CardListRelationFilter;
  id?: StringFilter;
  keyword?: StringNullableFilter;
  popularity?: IntNullableFilter;
};

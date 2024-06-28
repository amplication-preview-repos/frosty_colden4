import { CardCreateNestedManyWithoutTrendsInput } from "./CardCreateNestedManyWithoutTrendsInput";

export type TrendCreateInput = {
  cards?: CardCreateNestedManyWithoutTrendsInput;
  keyword?: string | null;
  popularity?: number | null;
};

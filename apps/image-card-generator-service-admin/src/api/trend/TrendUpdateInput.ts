import { CardUpdateManyWithoutTrendsInput } from "./CardUpdateManyWithoutTrendsInput";

export type TrendUpdateInput = {
  cards?: CardUpdateManyWithoutTrendsInput;
  keyword?: string | null;
  popularity?: number | null;
};

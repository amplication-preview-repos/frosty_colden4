import { TrendWhereUniqueInput } from "../trend/TrendWhereUniqueInput";

export type CardUpdateInput = {
  backgroundImageUrl?: string | null;
  description?: string | null;
  title?: string | null;
  trend?: TrendWhereUniqueInput | null;
};

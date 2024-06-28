import { TrendWhereUniqueInput } from "../trend/TrendWhereUniqueInput";

export type CardCreateInput = {
  backgroundImageUrl?: string | null;
  description?: string | null;
  title?: string | null;
  trend?: TrendWhereUniqueInput | null;
};

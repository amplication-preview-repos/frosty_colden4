import { Trend as TTrend } from "../api/trend/Trend";

export const TREND_TITLE_FIELD = "keyword";

export const TrendTitle = (record: TTrend): string => {
  return record.keyword?.toString() || String(record.id);
};

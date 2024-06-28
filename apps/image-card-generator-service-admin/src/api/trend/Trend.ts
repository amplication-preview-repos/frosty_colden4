import { Card } from "../card/Card";

export type Trend = {
  cards?: Array<Card>;
  createdAt: Date;
  id: string;
  keyword: string | null;
  popularity: number | null;
  updatedAt: Date;
};

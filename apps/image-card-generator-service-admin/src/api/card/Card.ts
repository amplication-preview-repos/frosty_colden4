import { Trend } from "../trend/Trend";

export type Card = {
  backgroundImageUrl: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  title: string | null;
  trend?: Trend | null;
  updatedAt: Date;
};

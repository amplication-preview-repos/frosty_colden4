import { JsonValue } from "type-fest";

export type Search = {
  createdAt: Date;
  id: string;
  keyword: string | null;
  results: JsonValue;
  updatedAt: Date;
};

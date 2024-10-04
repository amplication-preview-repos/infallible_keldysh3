import { JsonValue } from "type-fest";

export type Post = {
  author: string | null;
  body: string | null;
  createdAt: Date;
  id: string;
  image: JsonValue;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};

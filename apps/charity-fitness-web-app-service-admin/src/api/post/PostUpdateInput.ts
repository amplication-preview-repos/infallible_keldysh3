import { InputJsonValue } from "../../types";

export type PostUpdateInput = {
  author?: string | null;
  body?: string | null;
  image?: InputJsonValue;
  status?: "Option1" | null;
  title?: string | null;
};

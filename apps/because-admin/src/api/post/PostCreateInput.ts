import { InputJsonValue } from "../../types";

export type PostCreateInput = {
  author?: string | null;
  body?: string | null;
  image?: InputJsonValue;
  status?: "Option1" | null;
  title?: string | null;
};

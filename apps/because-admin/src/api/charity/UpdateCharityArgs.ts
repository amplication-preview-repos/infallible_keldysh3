import { CharityWhereUniqueInput } from "./CharityWhereUniqueInput";
import { CharityUpdateInput } from "./CharityUpdateInput";

export type UpdateCharityArgs = {
  where: CharityWhereUniqueInput;
  data: CharityUpdateInput;
};

import { CharityWhereInput } from "./CharityWhereInput";
import { CharityOrderByInput } from "./CharityOrderByInput";

export type CharityFindManyArgs = {
  where?: CharityWhereInput;
  orderBy?: Array<CharityOrderByInput>;
  skip?: number;
  take?: number;
};

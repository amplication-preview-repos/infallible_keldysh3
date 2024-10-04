import { EntityMediaWhereInput } from "./EntityMediaWhereInput";
import { EntityMediaOrderByInput } from "./EntityMediaOrderByInput";

export type EntityMediaFindManyArgs = {
  where?: EntityMediaWhereInput;
  orderBy?: Array<EntityMediaOrderByInput>;
  skip?: number;
  take?: number;
};

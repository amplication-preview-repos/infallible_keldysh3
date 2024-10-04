import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EntityMediaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EntityMedias"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="EntityID" source="entityId" />
        <TextField label="EntityType" source="entityType" />
        <TextField label="ID" source="id" />
        <TextField label="MediaURL" source="mediaUrl" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

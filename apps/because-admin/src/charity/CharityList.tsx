import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CharityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Charities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <TextField label="SuggestedDonation" source="suggestedDonation" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="WebsiteURL" source="websiteUrl" />{" "}
      </Datagrid>
    </List>
  );
};

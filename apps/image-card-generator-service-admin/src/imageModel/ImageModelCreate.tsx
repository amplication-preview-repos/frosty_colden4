import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ImageModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="APIEndpoint" source="apiEndpoint" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};

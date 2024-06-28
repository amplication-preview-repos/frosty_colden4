import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ImageModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="APIEndpoint" source="apiEndpoint" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};

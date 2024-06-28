import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TrendTitle } from "../trend/TrendTitle";

export const CardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="backgroundImageUrl" source="backgroundImageUrl" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="trend.id" reference="Trend" label="Trend">
          <SelectInput optionText={TrendTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

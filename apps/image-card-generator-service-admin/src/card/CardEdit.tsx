import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TrendTitle } from "../trend/TrendTitle";

export const CardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="backgroundImageUrl" source="backgroundImageUrl" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="trend.id" reference="Trend" label="Trend">
          <SelectInput optionText={TrendTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

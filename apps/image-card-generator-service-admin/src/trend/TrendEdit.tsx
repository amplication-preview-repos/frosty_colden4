import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CardTitle } from "../card/CardTitle";

export const TrendEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="cards"
          reference="Card"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CardTitle} />
        </ReferenceArrayInput>
        <TextInput label="keyword" source="keyword" />
        <NumberInput step={1} label="popularity" source="popularity" />
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CardTitle } from "../card/CardTitle";

export const TrendCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};

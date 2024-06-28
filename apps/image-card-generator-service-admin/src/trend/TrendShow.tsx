import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TREND_TITLE_FIELD } from "./TrendTitle";

export const TrendShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="keyword" source="keyword" />
        <TextField label="popularity" source="popularity" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Card" target="trendId" label="Cards">
          <Datagrid rowClick="show">
            <TextField label="backgroundImageUrl" source="backgroundImageUrl" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="title" source="title" />
            <ReferenceField label="Trend" source="trend.id" reference="Trend">
              <TextField source={TREND_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SearchList } from "./search/SearchList";
import { SearchCreate } from "./search/SearchCreate";
import { SearchEdit } from "./search/SearchEdit";
import { SearchShow } from "./search/SearchShow";
import { TrendList } from "./trend/TrendList";
import { TrendCreate } from "./trend/TrendCreate";
import { TrendEdit } from "./trend/TrendEdit";
import { TrendShow } from "./trend/TrendShow";
import { CardList } from "./card/CardList";
import { CardCreate } from "./card/CardCreate";
import { CardEdit } from "./card/CardEdit";
import { CardShow } from "./card/CardShow";
import { ImageModelList } from "./imageModel/ImageModelList";
import { ImageModelCreate } from "./imageModel/ImageModelCreate";
import { ImageModelEdit } from "./imageModel/ImageModelEdit";
import { ImageModelShow } from "./imageModel/ImageModelShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ImageCardGeneratorService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Search"
          list={SearchList}
          edit={SearchEdit}
          create={SearchCreate}
          show={SearchShow}
        />
        <Resource
          name="Trend"
          list={TrendList}
          edit={TrendEdit}
          create={TrendCreate}
          show={TrendShow}
        />
        <Resource
          name="Card"
          list={CardList}
          edit={CardEdit}
          create={CardCreate}
          show={CardShow}
        />
        <Resource
          name="ImageModel"
          list={ImageModelList}
          edit={ImageModelEdit}
          create={ImageModelCreate}
          show={ImageModelShow}
        />
      </Admin>
    </div>
  );
};

export default App;

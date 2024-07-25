import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ExpenseTrackerDebtCreditNameTagsPersonUserList } from "./expenseTrackerDebtCreditNameTagsPersonUser/ExpenseTrackerDebtCreditNameTagsPersonUserList";
import { ExpenseTrackerDebtCreditNameTagsPersonUserCreate } from "./expenseTrackerDebtCreditNameTagsPersonUser/ExpenseTrackerDebtCreditNameTagsPersonUserCreate";
import { ExpenseTrackerDebtCreditNameTagsPersonUserEdit } from "./expenseTrackerDebtCreditNameTagsPersonUser/ExpenseTrackerDebtCreditNameTagsPersonUserEdit";
import { ExpenseTrackerDebtCreditNameTagsPersonUserShow } from "./expenseTrackerDebtCreditNameTagsPersonUser/ExpenseTrackerDebtCreditNameTagsPersonUserShow";
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
        title={"Dashboard backend- expense tracking"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="ExpenseTrackerDebtCreditNameTagsPersonUser"
          list={ExpenseTrackerDebtCreditNameTagsPersonUserList}
          edit={ExpenseTrackerDebtCreditNameTagsPersonUserEdit}
          create={ExpenseTrackerDebtCreditNameTagsPersonUserCreate}
          show={ExpenseTrackerDebtCreditNameTagsPersonUserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

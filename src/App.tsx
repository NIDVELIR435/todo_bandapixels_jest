import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { ButtonAll } from "./component/Buttons/ButtonAll/ButtonAll";
import ButtonActive from "./component/Buttons/ButtonActive/ButtonActive";
import ButtonComplete from "./component/Buttons/ButtonComplete/ButtonComplete";
import { ButtonAddTask } from "./component/Buttons/ButtonAddTask/ButtonAddTask";
import { FieldForTodos } from "./component/FieldForTodos/FieldForTodos";
import { ButtonOnHold } from "./component/Buttons/ButtonOnHold/ButtonOnHold";
import { ButtonForDrawerOfSearch } from "./component/Buttons/ButtonForDrawerOfSearch/ButtonForDrawerOfSearch";
import { useAppDispatch, useCurrentThemeMode } from "./State/Hooks";
import { fetchTasks } from "./State/Slices/TodoSlice/TodoSlice";
import { ButtonThemeMode } from "./component/Buttons/ButtonThemeMode/ButtonThemeMode";

function App(): JSX.Element {
  const { Header, Content, Footer } = Layout;
  const dispatch = useAppDispatch();
  const currentThemeMode = useCurrentThemeMode();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout
      className="layout"
      style={{ backgroundColor: currentThemeMode ? "grey" : "" }}
    >
      <Header>
        <div id="1" className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key={1}>Dark mode</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <ButtonAddTask />
          <ButtonForDrawerOfSearch />
          <ButtonThemeMode />
          <ButtonAll />
          <ButtonActive />
          <ButtonOnHold />
          <ButtonComplete />
        </div>
        <FieldForTodos />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        ©2021 Created by BandaPixels
      </Footer>
    </Layout>
  );
}

export default App;

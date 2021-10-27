import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { ButtonAll } from "./component/Item/ButtonAll/ButtonAll";
import ButtonActive from "./component/Item/ButtonActive/ButtonActive";
import ButtonComplete from "./component/Item/ButtonComplete/ButtonComplete";
import { ButtonAddTask } from "./component/Item/ButtonAddTask/ButtonAddTask";
import { Task } from "./component/Item/Task/Task";
import { ButtonOnHold } from "./component/Item/ButtonOnHold/ButtonOnHold";
import { ButtonSearch } from "./component/Item/ButtonSearch/ButtonSearch";

function App(): JSX.Element {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout className="layout">
      <Header>
        <div id="1" className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key={1}>Tasks</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <ButtonAddTask />
          <ButtonSearch />
          <ButtonAll />
          <ButtonActive />
          <ButtonOnHold />
          <ButtonComplete />
        </div>
        <Task />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        ©2021 Created by BandaPixels
      </Footer>
    </Layout>
  );
}

export default App;

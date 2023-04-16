import React, { useState } from "react";
import "./styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { SystemArchitecture } from "./components/SystemArchitecture";
import { Home } from "./components/Home";
import { Blog } from "./components/Blog";
import { Application } from "./components/Application";

export const App = () => {
  return (
    <>
      <h1>tech blog</h1>
      <Tabs>
        <TabList>
          <Tab>HOME</Tab>
          <Tab>SystemArchitecture</Tab>
          <Tab>Application</Tab>
          <Tab>Blog</Tab>
        </TabList>

        <TabPanel>
          <Home />
        </TabPanel>
        <TabPanel>
          <SystemArchitecture />
        </TabPanel>
        <TabPanel>
          <Application />
        </TabPanel>
        <TabPanel>
          <Blog />
        </TabPanel>
      </Tabs>
    </>
  );
};

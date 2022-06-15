import React from "react";
import MainLayout from "../common/ui/layout/main-layout";

import styles from "./App.module.scss";
import Detail from "./Detail";
import Summary from "./Summary";

const App = () => {
  return (
    <MainLayout>
      <Summary />
      <Detail />
    </MainLayout>
  );
};

export default App;

import React from "react";
import MainLayout from "../common/ui/layout/main-layout";

import styles from "./App.module.scss";
import Summary from "./Summary";

const App = () => {
  return (
    <MainLayout>
      <Summary />
      <section className={styles.detail}></section>
    </MainLayout>
  );
};

export default App;

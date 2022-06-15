import React, { FC, ReactNode } from "react";

import styles from "./MainLayout.module.scss";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = (props: Props) => {
  return <div className={styles["main-layout"]}>{props.children}</div>;
};

export default MainLayout;

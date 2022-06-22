import React, { FC, ReactNode } from "react";
import Loading from "../../components/loading";

import styles from "./MainLayout.module.scss";

interface Props {
  children: ReactNode;
  isOpen: boolean;
}

const MainLayout: FC<Props> = (props: Props) => {
  const { children, isOpen } = props;

  return (
    <div className={styles["main-layout"]}>
      <Loading isOpen={isOpen} />
      {children}
    </div>
  );
};

export default MainLayout;

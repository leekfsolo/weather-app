import React, { FC, ReactNode } from "react";

import styles from "./Container.module.scss";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = (props: Props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Container;

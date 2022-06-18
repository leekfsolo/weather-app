import React, { FC } from "react";
import { Spinner } from "react-bootstrap";

import styles from "./Loading.module.scss";

interface Props {
  isOpen: boolean;
}

const Loading: FC<Props> = (props: Props) => {
  return (
    <div className={`${styles.loading} ${props.isOpen && styles.open}`}>
      <Spinner
        animation="border"
        variant="primary"
        className={styles.content}
      ></Spinner>
    </div>
  );
};

export default Loading;

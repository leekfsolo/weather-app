import React, { FC, ReactNode, useEffect, useRef } from "react";
import { ReactComponent as NearMe } from "../../../common/ui/assets/images/near-me.svg";

import styles from "./HighlightBox.module.scss";

interface HighlightData {
  value: number;
  unit: string;
}

interface Props {
  children?: ReactNode;
  progressBar?: boolean;
  extend?: boolean;
  title: string;
  data: HighlightData;
}

const HighlightBox: FC<Props> = (props: Props) => {
  const { progressBar = false, extend = false, title, data } = props;
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressBarRef.current)
      progressBarRef.current.style.width =
        progressBarRef.current.getAttribute("aria-valuenow") + "%";
  }, []);

  return (
    <div className={styles.box}>
      <h4>{title}</h4>
      <p className={styles.data}>
        <span>{data.value} </span>
        {data.unit}
      </p>
      {extend && (
        <p className={styles.extend}>
          <NearMe />
          WSW
        </p>
      )}

      {progressBar && (
        <div className={styles["progress-bar"]}>
          <div className={styles.indicator}>
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <div className={styles.progress}>
            <div
              className={styles.bar}
              role="progressbar"
              aria-valuenow={84}
              ref={progressBarRef}
            ></div>
          </div>
          <div className={styles.unit}>%</div>
        </div>
      )}
    </div>
  );
};

export default HighlightBox;

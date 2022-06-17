import React, { FC } from "react";

import { ReactComponent as Close } from "../../../common/ui/assets/images/close.svg";
import { ReactComponent as Search } from "../../../common/ui/assets/images/search.svg";
import { ReactComponent as ChevronRight } from "../../../common/ui/assets/images/chevron-right.svg";

import styles from "./Searching.module.scss";

interface Props {
  setIsShowSearching: (isShowSearching: boolean) => void;
}

const Searching: FC<Props> = (props: Props) => {
  const { setIsShowSearching } = props;

  return (
    <div className={styles.searching}>
      <div className={styles.close} onClick={() => setIsShowSearching(false)}>
        <Close />
      </div>
      <div className={styles.searchBar}>
        <form action="#">
          <input type="text" placeholder="search location" />
          <button type="submit">Search</button>
          <Search />
        </form>
      </div>
      <div className={styles.locations}>
        <ul>
          <li>
            <span>London</span>
            <span className={styles.chevronRight}>
              <ChevronRight />
            </span>
          </li>
          <li>
            <span>Barcelona</span>
            <span className={styles.chevronRight}>
              <ChevronRight />
            </span>
          </li>
          <li>
            <span>Long Beach</span>
            <span className={styles.chevronRight}>
              <ChevronRight />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Searching;

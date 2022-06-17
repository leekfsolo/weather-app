import React, { FC, useEffect, useRef, useState } from "react";

import { ReactComponent as Close } from "../../../common/ui/assets/images/close.svg";
import { ReactComponent as Search } from "../../../common/ui/assets/images/search.svg";
import { ReactComponent as ChevronRight } from "../../../common/ui/assets/images/chevron-right.svg";

import styles from "./Searching.module.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeCity } from "../../../weatherSlice/weatherSlice";

interface Props {
  setIsShowSearching: (isShowSearching: boolean) => void;
}

const Searching: FC<Props> = (props: Props) => {
  const { setIsShowSearching } = props;

  const [cities, setCities] = useState<Array<string>>([]);
  const [filteredValue, setFilteredValue] = useState<string>("");
  const locationInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const searchLocationHandler = (e: any) => {
    e.preventDefault();
  };

  const locationInputHandler = () => {
    if (locationInputRef.current)
      setFilteredValue(locationInputRef.current.value.toLowerCase());
  };

  useEffect(() => {
    if (filteredValue !== "") {
      const fetchData = async () => {
        const locationData = await axios.get(
          "https://countriesnow.space/api/v0.1/countries"
        );

        const allCities: Array<string> = locationData.data.data
          .map((location: any) => location.cities)
          .flat();
        const newCities: Array<string> = [];

        for (const city of allCities) {
          if (city.toLowerCase().indexOf(filteredValue) === 0) {
            newCities.push(city);
            setCities(newCities);

            if (newCities.length > 4) break;
          }
        }
      };

      fetchData();
    } else {
      setCities([]);
    }
  }, [filteredValue]);

  return (
    <div className={styles.searching}>
      <div className={styles.close} onClick={() => setIsShowSearching(false)}>
        <Close />
      </div>
      <div className={styles.searchBar}>
        <form action="#" onSubmit={searchLocationHandler}>
          <input
            type="text"
            placeholder="search location"
            ref={locationInputRef}
            onInput={locationInputHandler}
          />
          <button type="submit">Search</button>
          <Search />
        </form>
      </div>
      <div className={styles.locations}>
        <ul>
          {cities.map((city, idx) => (
            <li
              key={idx}
              onClick={() => {
                dispatch(changeCity(city));
                setIsShowSearching(false);
              }}
            >
              <span>{city}</span>
              <span className={styles.chevronRight}>
                <ChevronRight />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Searching;

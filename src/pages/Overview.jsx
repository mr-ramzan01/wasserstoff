import { useEffect, useState } from "react";
import { Map } from "../components/Overview/Map";
import { geoData } from "../data";
import styles from "../styles/overview.module.css";
import style from "../styles/dashboard.module.css";
import axios from "axios";
import Sidebar from "../components/Overview/Sidebar";

export const Overview = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Fetching and setting the coutries data from the api
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios("https://restcountries.com/v3.1/all");
    if (res.data) {
      setData(res.data);
      setLoading(false);
    }
  };
  return (
    <>
      <div className={styles.overview}>
        <div>
          <Sidebar />
          <div className={styles.overview_map}>
            {loading ? (
              <div className={style.loading}>
                <div></div>
              </div>
            ) : (
              <Map
                data={geoData}
                countriesData={data}
                width={1000}
                height={560}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

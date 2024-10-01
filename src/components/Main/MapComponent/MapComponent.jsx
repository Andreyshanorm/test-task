import React, { useState } from "react";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import { ContentContainer } from "../../ContentContainer/ContentContainer";
import styles from "./MapComponent.module.css";
import logoIcon from "../../../images/fullIcon.png";

const initialPoints = [
  { coordinates: [55.751574, 37.673856], id: 1, type: "physical" },
  { coordinates: [55.661574, 37.573856], id: 2, type: "physical" },
  { coordinates: [55.871574, 37.773856], id: 3, type: "physical" },
  { coordinates: [55.781574, 37.513856], id: 4, type: "physical" },
  { coordinates: [55.891574, 37.523856], id: 5, type: "physical" },
  { coordinates: [55.801574, 37.533856], id: 6, type: "legal" },
  { coordinates: [55.611574, 37.543856], id: 7, type: "physical" },
  { coordinates: [55.821574, 37.573856], id: 8, type: "physical" },
  { coordinates: [55.831574, 37.583856], id: 9, type: "legal" },
  { coordinates: [55.641574, 37.543856], id: 10, type: "legal" },
];

export const MapComponent = () => {
  const [points, setPoints] = useState(initialPoints);
  const [mapState, changeMapState] = useState(10);

  const removePoints = (pointType) => {
    if (pointType === "legal") {
      const legal = points.filter((item) => {
        return item.type === "legal";
      });
      setPoints(legal);
    }

    if (pointType === "physical") {
      const physical = points.filter((item) => {
        return item.type === "physical";
      });
      setPoints(physical);
    }
  };

  const showAllPoints = () => {
    setPoints(initialPoints);
  };

  return (
    <ContentContainer>
      <h2 className={styles.map_tittle}>География</h2>
      <div className={styles.mapContainer}>
        <YMaps>
          <Map
            defaultState={{
              center: [55.751574, 37.573856],
              zoom: 10,
              controls: [],
            }}
            className={styles.map}
          >
            {points.map((point) => (
              <Placemark
                options={{
                  iconLayout: "default#image",
                  iconImageHref: logoIcon,
                  iconImageSize: [44, 44], 
                  iconImageOffset: [-15, -12], 
                }}
                key={point.id}
                geometry={point.coordinates}
              />
            ))}
            <ZoomControl
              options={{ size: "small", position: { right: 10, bottom: 30 } }}
            />
          </Map>
        </YMaps>
        <div className={styles.buttons_block}>
          <button
            className={styles.map_btn}
            onClick={() => removePoints("legal")}
          >
            Юрлица
          </button>
          <button
            className={styles.map_btn}
            onClick={() => removePoints("physical")}
          >
            Физлица
          </button>
          <button className={styles.primary_map_btn} onClick={showAllPoints}>
            Показать все
          </button>
        </div>
        
      </div>
    </ContentContainer>
  );
};

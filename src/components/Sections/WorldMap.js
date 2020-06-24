import React, { useContext } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { v4 as uuidv4 } from "uuid";

import { SET_VIEWPORT } from "../../store/actionTypes";
import { MapDataContext } from "../../store/contexts/MapDataContext";

const MAPBOX_PUBLIC_TOKEN =
  "pk.eyJ1IjoiYXJpZnNhbmF1bGxhaCIsImEiOiJja2JxM2VpOTUyaXEwMnJxaW4xc2M0bXc1In0.XEBz70w4rf_7X3qeHZP8PQ";

function WorldMap() {
  const { dispatch, viewPort, mapData } = useContext(MapDataContext);

  return (
    <ReactMapGL
      {...viewPort}
      onViewportChange={(viewPort) =>
        dispatch({ type: SET_VIEWPORT, payload: { viewPort } })
      }
      mapboxApiAccessToken={MAPBOX_PUBLIC_TOKEN}
      mapStyle="mapbox://styles/mapbox/dark-v10"
    >
      {mapData?.length &&
        mapData.map((country) => (
          <Marker
            key={uuidv4()}
            latitude={Number(country.countryInfo.lat)}
            longitude={Number(country.countryInfo.long)}
          >
            <div className="country">
              <div
                className="flag"
                style={{
                  backgroundImage: `url(${country.countryInfo.flag})`,
                }}
              />
              <div className="country-specs">
                <h1>Country: {country.country}</h1>
                <h1>Population: {country.population}</h1>
                <h1>Total: {country.cases}</h1>
                <h1>Active: {country.active}</h1>
                <h1>Criticial: {country.critical}</h1>
                <h1>Deaths: {country.deaths}</h1>
                <h1>Recovered: {country.recovered}</h1>
                <h1>
                  Last Updated at: {new Date(country.updated).toLocaleString()}
                </h1>
              </div>
            </div>
          </Marker>
        ))}
    </ReactMapGL>
  );
}

export default WorldMap;

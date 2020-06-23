import React, { useEffect, useReducer } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { v4 as uuidv4 } from "uuid";

import jhAxios from "../../utilities/JH-axios-instance";
import { MapDataContextProvider } from "../../store/contexts/MapDataContext";
import mapDataReducer from "../../store/reducers/WorldMapReducer";
import {
  GET_WORLD_MAP_DATA,
  SET_LOADING_MAP_DATA,
  GET_WORLD_MAP_DATA_FAIL,
  SET_VIEWPORT,
} from "../../store/actionTypes";

const MAPBOX_PUBLIC_TOKEN =
  "pk.eyJ1IjoiYXJpZnNhbmF1bGxhaCIsImEiOiJja2JxM2VpOTUyaXEwMnJxaW4xc2M0bXc1In0.XEBz70w4rf_7X3qeHZP8PQ";

function WorldMap() {
  const [state, dispatch] = useReducer(mapDataReducer, {
    mapData: null,
    loadingMapData: false,
    error: null,
    viewPort: {
      width: "100vw",
      height: "100vh",
      latitude: 30.3753,
      longitude: 69.3451,
      zoom: 4,
    },
  });

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        dispatch({
          type: SET_LOADING_MAP_DATA,
          payload: { loadingMapData: true },
        });

        const { data } = await jhAxios.get("/v2/countries");
        console.log(data[0]);
        dispatch({ type: GET_WORLD_MAP_DATA, payload: { mapData: data } });

        dispatch({
          type: SET_LOADING_MAP_DATA,
          payload: { loadingMapData: false },
        });
      } catch (err) {
        dispatch({
          type: SET_LOADING_MAP_DATA,
          payload: { loadingMapData: false },
        });

        dispatch({
          type: GET_WORLD_MAP_DATA_FAIL,
          payload: { error: err.message },
        });
      }
    };

    fetchMapData();
  }, []);
  return (
    <MapDataContextProvider state={{ ...state }}>
      <ReactMapGL
        {...state.viewPort}
        onViewportChange={(viewPort) =>
          dispatch({ type: SET_VIEWPORT, payload: { viewPort } })
        }
        mapboxApiAccessToken={MAPBOX_PUBLIC_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v10"
      >
        {state?.mapData?.length &&
          state.mapData.map((country) => (
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
                    Last Updated at: {new Date(country.updated).toString()}
                  </h1>
                </div>
              </div>
            </Marker>
          ))}
      </ReactMapGL>
    </MapDataContextProvider>
  );
}

export default WorldMap;

import React, { useEffect, useReducer } from "react";
import ReactMapGL from "react-map-gl";

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
      latitude: 30.175623,
      longitude: 71.48764,
      zoom: 12,
    },
  });

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        dispatch({
          type: SET_LOADING_MAP_DATA,
          payload: { loadingMapData: true },
        });

        const { data } = await jhAxios.get("/v2/jhucsse");
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
      />
    </MapDataContextProvider>
  );
}

export default WorldMap;

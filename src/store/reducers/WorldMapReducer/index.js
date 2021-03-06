import {
  GET_WORLD_MAP_DATA,
  GET_WORLD_MAP_DATA_FAIL,
  SET_LOADING_MAP_DATA,
  SET_VIEWPORT,
} from "../../actionTypes";

const initialState = {
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
};

const mapDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_MAP_DATA:
      return { ...state, loadingMapData: action.payload.loadingMapData };

    case GET_WORLD_MAP_DATA:
      return { ...state, mapData: action.payload.mapData };

    case GET_WORLD_MAP_DATA_FAIL:
      return { ...state, error: action.payload.error };

    case SET_VIEWPORT:
      return { ...state, viewPort: action.payload.viewPort };

    default:
      return state;
  }
};

export default mapDataReducer;

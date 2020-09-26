import { LatIngType, SatelliteType } from '../../types/types';
import {
  ADD_MARKER,
  GET_ISS_COORDINATES,
  SET_CATEGORY_STATUS,
  SET_MAP_STATUS,
  SET_CURRENT_MAP_BG_LAYER,
  SET_MAP_LAYER_STATUS,
  SET_ISS_COORDINATES,
  GET_STARLINK_SATELITES,
  SET_SATELITES,
  SET_ISS_STATUS,
} from '../constants/constants';

interface addMarkerType {
  type: typeof ADD_MARKER;
  payload: {
    name: string,
    category: string,
    latlng: LatIngType,
  };
}

interface setCategoryStatusType {
  type: typeof SET_CATEGORY_STATUS;
  payload: {
    id: string,
    isActive: boolean,
  };
}

interface setMapStatusType {
  type: typeof SET_MAP_STATUS;
  payload: {
    isMapActive: boolean,
  };
}

interface setCurrentMapBGLayerType {
  type: typeof SET_CURRENT_MAP_BG_LAYER;
  payload: {
    id: string,
  };
}

interface setMapLayerStatusType {
  type: typeof SET_MAP_LAYER_STATUS;
  payload: {
    id: string,
    isActive: boolean,
  };
}

interface setISSCoordinatesType {
  type: typeof SET_ISS_COORDINATES;
  payload: {
    height: number,
    latIng: LatIngType,
  };
}

interface setSatelitesType {
  type: typeof SET_SATELITES;
  payload: {
    satelitesList: Array<SatelliteType>,
  };
}

interface setISSStatusType {
  type: typeof SET_ISS_STATUS;
  payload: {
    isActive: boolean,
  };
}

type getISSCoordinatesType = {
  type: typeof GET_ISS_COORDINATES,
};

type getStarlinkSatelitesType = {
  type: typeof GET_STARLINK_SATELITES,
};

export const addMarker = (name: string, category: string, latlng: LatIngType): addMarkerType => ({
  type: ADD_MARKER,
  payload: {
    name,
    category,
    latlng,
  },
});

export const setCategoryStatus = (id: string, isActive: boolean): setCategoryStatusType => ({
  type: SET_CATEGORY_STATUS,
  payload: {
    id,
    isActive,
  },
});

export const setMapStatus = (isMapActive: boolean): setMapStatusType => ({
  type: SET_MAP_STATUS,
  payload: {
    isMapActive,
  },
});

export const setMapLayerStatus = (id: string, isActive: boolean): setMapLayerStatusType => ({
  type: SET_MAP_LAYER_STATUS,
  payload: {
    id,
    isActive,
  },
});

export const setCurrentMapBGLayer = (id: string): setCurrentMapBGLayerType => ({
  type: SET_CURRENT_MAP_BG_LAYER,
  payload: {
    id,
  },
});

export const setISSCoordinates = (height: number, latIng: LatIngType): setISSCoordinatesType => ({
  type: SET_ISS_COORDINATES,
  payload: {
    height,
    latIng,
  },
});

export const setISSStatus = (isActive: boolean): setISSStatusType => ({
  type: SET_ISS_STATUS,
  payload: {
    isActive,
  },
});

export const setSatelites = (satelitesList: Array<SatelliteType>): setSatelitesType => ({
  type: SET_SATELITES,
  payload: {
    satelitesList,
  },
});

export const getISSCoordinates = (): getISSCoordinatesType => ({
  type: GET_ISS_COORDINATES,
});

export const getStarlinkSatelites = (): getStarlinkSatelitesType => ({
  type: GET_STARLINK_SATELITES,
});

export type MapActionTypes =
  | addMarkerType
  | setCategoryStatusType
  | setMapStatusType
  | setCurrentMapBGLayerType
  | setMapLayerStatusType
  | setISSCoordinatesType
  | setISSStatusType
  | setSatelitesType;

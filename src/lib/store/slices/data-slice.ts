import {
  Nakamura1979MoonquakeData,
  Lognonne2003MoonquakeData,
} from "@/data/types";
import { createSlice } from "@reduxjs/toolkit";

interface TimeSeriesData {
  on: boolean;
  chinaEmissions: boolean;
  usEmissions: boolean;
  indiaEmissions: boolean;
  russiaEmissions: boolean;
}

interface DataState {
  topographicView: boolean;
  parallelsAndMeridians: boolean;
  seasAndOceans: boolean;
  cratersAndMountains: boolean;
  landingSites: boolean;
  activeView: string | null; // New property to track active view for legends
  selectedMoonquake:
    | Nakamura1979MoonquakeData
    | Lognonne2003MoonquakeData
    | undefined;
  timeSeriesData: TimeSeriesData;
  cameraPosition: [number, number, number];
}

const initialState: DataState = {
  topographicView: false,
  parallelsAndMeridians: false,
  seasAndOceans: false,
  cratersAndMountains: false,
  landingSites: false,
  activeView: null, // Initialize activeView as null
  selectedMoonquake: undefined,
  timeSeriesData: {
    on: false,
    chinaEmissions: true,  // Set to true by default
    usEmissions: true,     // Set to true by default
    indiaEmissions: true,  // Set to true by default
    russiaEmissions: true, // Set to true by default
  },
  cameraPosition: [0, 0, 0],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    toggleTopographicView: (state) => {
      state.topographicView = !state.topographicView;
      if (state.topographicView) {
        state.activeView = "topographicView";
        state.parallelsAndMeridians = false;
        state.seasAndOceans = false;
        state.cratersAndMountains = false;
        state.landingSites = false;
        state.timeSeriesData.on = false;
      } else {
        state.activeView = null;
      }
    },
    toggleParallelsAndMeridians: (state) => {
      state.parallelsAndMeridians = !state.parallelsAndMeridians;
      if (state.parallelsAndMeridians) {
        state.activeView = "parallelsAndMeridians";
        state.topographicView = false;
        state.seasAndOceans = false;
        state.cratersAndMountains = false;
        state.landingSites = false;
        state.timeSeriesData.on = false;
      } else {
        state.activeView = null;
      }
    },
    toggleSeasAndOceans: (state) => {
      state.seasAndOceans = !state.seasAndOceans;
      if (state.seasAndOceans) {
        state.activeView = "seasAndOceans";
        state.topographicView = false;
        state.parallelsAndMeridians = false;
        state.cratersAndMountains = false;
        state.landingSites = false;
        state.timeSeriesData.on = false;
      } else {
        state.activeView = null;
      }
    },
    toggleCratersAndMountains: (state) => {
      state.cratersAndMountains = !state.cratersAndMountains;
      if (state.cratersAndMountains) {
        state.activeView = "cratersAndMountains";
        state.topographicView = false;
        state.parallelsAndMeridians = false;
        state.seasAndOceans = false;
        state.landingSites = false;
        state.timeSeriesData.on = false;
      } else {
        state.activeView = null;
      }
    },
    toggleLandingSites: (state) => {
      state.landingSites = !state.landingSites;
      if (state.landingSites) {
        state.activeView = "landingSites";
        state.topographicView = false;
        state.parallelsAndMeridians = false;
        state.seasAndOceans = false;
        state.cratersAndMountains = false;
        state.timeSeriesData.on = false;
      } else {
        state.activeView = null;
      }
    },
    setSelectedMoonquake: (
      state,
      action: { payload: DataState["selectedMoonquake"] },
    ) => {
      state.selectedMoonquake = action.payload;
    },
    setTimeSeriesData: (
      state,
      action: { payload: Partial<TimeSeriesData> },
    ) => {
      state.timeSeriesData = {
        ...state.timeSeriesData,
        ...action.payload,
      };

      // If time series is turned on, deactivate all views
      if (state.timeSeriesData.on) {
        state.topographicView = false;
        state.parallelsAndMeridians = false;
        state.seasAndOceans = false;
        state.cratersAndMountains = false;
        state.landingSites = false;
        state.activeView = null;
      }
    },
    updateCameraPosition: (
      state,
      action: { payload: DataState["cameraPosition"] },
    ) => {
      state.cameraPosition = action.payload;
    },
    reset: () => initialState,
  },
});

export const dataActions = dataSlice.actions;

export type { TimeSeriesData, DataState };

export default dataSlice.reducer;





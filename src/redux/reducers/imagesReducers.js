import { ActionTypes } from "../constants/action-types";

const initialState = {images:[],};
export const imagesReducers = (state=initialState,{type,payload}) => {
  switch (type) {
      case ActionTypes.SET_IMGS:
          return {...state, images:payload};
      default:
          return state;
         
  }
}

export const imageSelectReducer = (state={},{type,payload}) => {
  switch (type) {
    case ActionTypes.SELECTED_IMG:
      return {...state,...payload};
    case ActionTypes.REMOVE_IMG:
      return {};
    default:
      return state;
  }
}

export const imageNameSerachReducer = (state="", {type,payload})=>{
  switch (type) {
    case ActionTypes.SET_IMG_NAME:
      return state=payload; 
    default:
      return state;
  }

}


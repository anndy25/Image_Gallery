import { combineReducers } from "redux";
import {imagesReducers,imageSelectReducer,imageNameSerachReducer} from "./imagesReducers"

const reducers = combineReducers({
    allImages: imagesReducers,
    image: imageSelectReducer,
    imageName: imageNameSerachReducer
})

export default reducers;
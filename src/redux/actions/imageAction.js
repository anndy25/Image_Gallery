import { ActionTypes } from "../constants/action-types"

export const setImgs=(images)=>{
    return{
        type:ActionTypes.SET_IMGS,
        payload:images

    }

}
export const selectedImg=(image)=>{
    return{
        type:ActionTypes.SELECTED_IMG,
        payload:image

    }

}
export const removeImg=()=>{
    return{
        type:ActionTypes.REMOVE_IMG,
    };

}
export const setImgName=(name)=>{
    return{
        type:ActionTypes.SET_IMG_NAME,
        payload:name,
    }
}

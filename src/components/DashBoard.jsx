import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'

import ImageComponents from './ImageComponents'
import { setImgs } from "../redux/actions/imageAction";


const DashBoard = () => {
    const [name, setName] = useState("Random");

    const imageName = useSelector((state) => state.imageName);

    const dispatch = useDispatch();
    
    const imageAPI = async () => {


       
        
        const response = await axios.get(`https://api.unsplash.com/search/photos/?page=1&query=${imageName === "" ? 'random' : imageName.replace(/\s+/g, '+').trim()}&client_id=xoZJYGf35vNiUT717B12wayvpUR_8-DVT2Hj1Urn1JQ&per_page=200&order_by=relevant`).catch(err => console.error(err));

        setName(imageName);
        dispatch(setImgs(response.data.results));

    }
    useEffect(() => {
        imageAPI();

    }, [imageName]);
    
    return (
        <>
        <h2 className="fs-2 text-capitalize fst-italic fw-bolder text-center m-3 py-3" style={{borderBottom: '2px solid gray',}}>Image Gallery: {name===""?"Random":name}</h2> 
            <ImageComponents />
        </>
    )
}

export default DashBoard

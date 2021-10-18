import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory} from "react-router-dom"
import axios from 'axios';

import { useParams } from 'react-router-dom'
import { selectedImg, removeImg } from '../redux/actions/imageAction';

const ImageData = () => {
    const dispatch = useDispatch();
    const image = useSelector((state) => state.image);
    const { id } = useParams();
    const history = useHistory();
    const getImageByID = async () => {
        const response = await axios.get(`https://api.unsplash.com/photos/${id}?client_id=xoZJYGf35vNiUT717B12wayvpUR_8-DVT2Hj1Urn1JQ`);
        //     console.log(id);
        //    console.log(response);

        dispatch(selectedImg(response.data));
        
        
        
    }
    window.document.title="Image Info"
    useEffect(() => {
        getImageByID()
        return () => {
            dispatch(removeImg());
        };
    }, [id]);

    return (
        <div style={{minHeight: '75vh'}}>
        <button type="button" className="btn btn-secondary mx-2 my-2" onClick={history.goBack}>&larr;Go Back</button>
            {
                
                Object.keys(image).length === 0 ? null : (
                    <>
                        <div className="my-2 d-flex justify-content-center align-items-center " style={{ width: "100vw" }}>


                            <div className="shadow  mb-5 bg-body rounded card mb-3 col-lg-8 col-md-9  " >
                                <div className="row g-0" >
                                    <div className="imgSelect col-md-5 " >
                                        <img src={image.urls.regular} className="img-fluid" alt="..." style={{ width: '100%', height: '100%' }} />
                                    </div>
                                    <div className="col-md-7 px-2  d-flex justify-content-center align-items-center" >
                                        <div>
                                            <h5 className="text-capitalize fst-italic card-title fs-3">{image.alt_description}</h5>
                                            <ul className="fst-italic ">
                                                <li className="text-capitalize fs-4">Name: {image.user.first_name + ' ' + image.user.last_name}</li>
                                                <li className="text-capitalize fs-4">Created: {image.created_at}</li>
                                                <li className="text-capitalize fs-4" >Description: {image.alt_description}</li>
                                                <li className="fs-4" >Image ID: {image.id}</li>
                                            </ul>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </>)
            }



        </div>
    )
}

export default ImageData

import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




const ImageComponents = () => {


    const images = useSelector((state) => state.allImages.images);
    const onMouseOverT = (id, title, index) => {
        let element1 = document.createElement('small');
        element1.className = 'card-title'
        element1.id = 'card-title' + id;

        element1.innerHTML = `<b>${title}</b>`;
        let sty = document.getElementById(id);
        element1.style.textTransform = 'Capitalize';

        let elm = document.getElementsByClassName('card-img-overlay')[index];
        elm.appendChild(element1);
        sty.style.filter = 'brightness(40%)'

    }
    const onMouseOut = (id, index) => {
        let sty = document.getElementById(id);
        sty.style.filter = 'brightness(100%)'
        let elm = document.getElementsByClassName('card-img-overlay')[index];
        elm.removeChild(document.getElementById('card-title' + id));




    }
    return (
        <>

            <div className="container" style={{ minHeight: '65vh' }}>
                {
                    images.length === 0 ? (
                        < >
                            <div style={{ width: '100%', height: '100%' }} >
                                <h4 className="text-center">Oop's Sorry!!😓😓, No result Found</h4>
                            </div>
                        </>

                    ) : (
                        <div className="imageCol">

                            {
                                images.map((element, index) => {

                                    return (
                                        < >
                                            <div className="shadow  bg-body rounded" key={index} style={{ breakInside: 'avoid', marginBottom: '1rem', }}>
                                                <Link to={`/images/${element.id}`}>
                                                    <div className="" onMouseOver={() => onMouseOverT(element.id, element.alt_description, index)} onMouseOut={() => onMouseOut(element.id, index)} >
                                                        <div className="card  text-white " >
                                                            <img src={element.urls.regular} className="card-img" alt="..." id={element.id} />
                                                            <div className="card-img-overlay">

                                                            </div>

                                                        </div>
                                                    </div>
                                                </Link>

                                            </div>
                                        </>

                                    )
                                }
                                )
                            }
                        </div>


                    )

                }

            </div>
        </>
    )
}

export default ImageComponents



import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setImgName } from "../redux/actions/imageAction";


const Header = () => {
    const [value, setValue] = useState("");

    const dispatch = useDispatch();

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(setImgName(value));

    }
    return (
        < >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 mb-3">
                <div className="container-fluid justify-content-center" style={{ position: "relative" }}>

                    <span className=" navbar-brand mb-0   fst-italic fw-bolder" >Gallery</span>

                    <form onSubmit={submitSearch} className="d-flex">
                        
                            <input className="inputTag form-control me-2" type="search" placeholder="Search" aria-label="Search" value={value} onChange={(e) => setValue(e.target.value)}  />
                    
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>

            </nav>

        </>
    )
}

export default Header

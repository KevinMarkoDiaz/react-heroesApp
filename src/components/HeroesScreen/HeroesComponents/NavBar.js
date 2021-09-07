import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogOut } from '../../../actions/auth';

export const NavBar = () => {

const dispatch = useDispatch()

const handleLogOut = ()=>{
  dispatch(startLogOut())
};


    return (
        <>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">                
                
                <Link to="/" className="navbar-brand">My team</Link>
                <Link to="/search" className="navbar-brand">Search</Link>          
                
            <form className="d-flex">
                 <button className="btn btn-outline-danger" onClick={handleLogOut}>Log out</button>
            </form>
            </div>
          </nav>  
        </>
    )
};

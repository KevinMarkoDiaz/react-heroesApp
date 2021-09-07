import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss'
import { NavBar } from './HeroesComponents/NavBar'
import { SearchImput } from './HeroesComponents/SearchImput'

import { clearDataSearch, searchDetailsId } from '../../actions/search'
import { addHero } from '../../actions/myTeam';


export const HeroSearch = () => {


    const {data} = useSelector(state => state.heroReducer)
    const dispatch = useDispatch()
    const {data: myTeamArr} = useSelector(state => state.myTeam)

    const handleClear = ()=>{
        dispatch(clearDataSearch())
    };

    const handleDetails = (e)=>{
        const id = e.target.accessKey;

        dispatch(searchDetailsId(id))
    };

  

    const handleAddMyTeamData = (e)=>{

        const id = e.target.accessKey

        const resultGood = myTeamArr.filter(hero => hero.biography.alignment === "good");
        const resultBad = myTeamArr.filter(hero => hero.biography.alignment === "bad");

        const [idSelected] = myTeamArr.filter(hero=> hero.id === id);
        const [herodata] =  data.filter(hero=> hero.id === id)
      
       

        if (!idSelected === true) {

            if (myTeamArr.length < 6) {
           
                if (resultGood.length < 3 && herodata.biography.alignment === 'good') {

                     dispatch(addHero(herodata))
     
                } else if (resultBad.length < 3 && herodata.biography.alignment === 'bad'){
    
                     dispatch(addHero(herodata))
    
                }else{
    
                    if (resultGood.length < 3) {
                        Swal.fire('Oops...', 'tienes tres  heroes malos, selcciona unos buenos', 'error')
                    } else {
                        Swal.fire('Oops...', 'tienes tres  heroes buenos, selcciona unos malos', 'error') 
                    }
                }
             } else {
                 
                 Swal.fire('Oops...', 'Tu equipo ya cuenta con seis integrantes ', 'error')
             } 
  
        } else {
            
            Swal.fire('Oops...', 'hero ya esta en tu equipo', 'error')
        }
  
    };


    return (
        <>
            <NavBar/>
            <div className="row row-cols-1 ">
                <div className="col-12 contenedorSearch " >
                    <SearchImput/>                 
                    <button className="btn btn-warning mt-5 shadow-sm" type="button" onClick={handleClear}>Clear</button>
                  </div>             
            </div>           
            <div className="container ">
                <div className="row row-cols-1 ">
                {                    

                    data.map(hero => (           
                        
                        <div className="col-sm man " key={hero.id}>                           
                           <div className="card cardHover shadow-lg mb-5" style={{width: 18+"rem"}} >
                                <img src={hero.image.url} className="card-img-top" alt="Hero img"/>
                                <div className="card-body">
                                    <h5 className="card-title">{hero.name}</h5>
                                    <div className="d-flex justify-content-between">
                                        <Link to="/detail" accessKey={hero.id} type="button" onClick={ handleDetails} className="btn btn-outline-primary btn-sm">Details</Link>
                                        <button type="button" accessKey={hero.id} onClick={handleAddMyTeamData} className="btn btn-outline-success btn-sm ">Add</button>
                                    </div>                                   
                                 </div>
                                </div>                        
                        </div>
                    )) 
                }                         
                  
                </div>
            </div>        
        </>
    )
};

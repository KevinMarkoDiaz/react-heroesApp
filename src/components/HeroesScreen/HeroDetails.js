import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss'

import { NavBar } from './HeroesComponents/NavBar'
import { Link } from 'react-router-dom';
import { clearDataDetails } from '../../actions/search';
import { addHero } from '../../actions/myTeam';

export const HeroDetails = () => {

    
    const dispatch = useDispatch()

    const {data:HeroDetail} = useSelector(state => state.detailStore)
    const {data: myTeamArr} = useSelector(state => state.myTeam)
    const{ biography } = HeroDetail

    const handleClearDetails = ()=>{

        dispatch(clearDataDetails())
    };

    const handleAddMyTeamData = ()=>{

        const resultGood = myTeamArr.filter(hero => hero.biography.alignment === "good");
        const resultBad = myTeamArr.filter(hero => hero.biography.alignment === "bad");

        const [idSelected] = myTeamArr.filter(hero=> hero.id === HeroDetail.id);
         
       // Validacion 

        if (!idSelected === true) {

            if (myTeamArr.length < 6) {
           
                if (resultGood.length < 3 && HeroDetail.biography.alignment === 'good') {

                     dispatch(addHero(HeroDetail))
     
                } else if (resultBad.length < 3 && HeroDetail.biography.alignment === 'bad'){
    
                     dispatch(addHero(HeroDetail))
    
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


    if (!!biography === false ) {

        return(
            <>
                <h2 className="m-5">Selecciona un heroe</h2>
            </>
        )
        
    } else {
        
        
        const{name, image, appearance, work,  }= HeroDetail;
        const hairColor = appearance["hair-color"]
        const eyeColor = appearance["eye-color"]
        const{ aliases } = HeroDetail.biography
        return (
            <>
    
                <NavBar/>
                <div className="container-lg border mt-5" >
      
                    <div className="card mb-3" style={{maxWidth: 1000+"px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={image.url} className="img-fluid rounded-start" alt="img Hero"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                     <h4 className="card-title">{name}</h4>
                                        <ul>
                                            <li><p>Peso: {appearance.weight[1]}</p></li>
                                            <li><p>Altura: {appearance.height[1]}</p></li>
                                            <li><p>Color de ojos: {eyeColor}</p></li>
                                            <li><p>Color de cabello: {hairColor}</p></li>
                                            <li><p>Logar de trabajo: {work.base}</p></li>
                                            <li><h5>Alias:</h5> <ul>{

                                                            aliases.map(alias  => (
                                                            
                                                                <li key={alias} className="listStyleNone"> {alias}  </li>
                                                            
                                                            ))                                                            
                                                            
                                                  }</ul></li>                          
                                                  
                                              </ul>
                                         </div>
                                      </div>
                                  </div>
                              </div>
                            <div className="d-flex justify-content-between">
                                            
                              <Link to="/search" className="btn btn-outline-warning" onClick={handleClearDetails}>Back</Link>
                              <button type="button" onClick={handleAddMyTeamData} className="btn btn-outline-success btn-sm ">Agregar</button>
                                            
                            </div>
                                            
                        </div>                                            
             </>
                         ) 
                     }                        
                };
                        
                        
                        
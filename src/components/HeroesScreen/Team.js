import React from 'react'
import { useSelector } from 'react-redux'
import { NavBar } from './HeroesComponents/NavBar'
import { Radar } from "react-chartjs-2";
import { useDispatch } from 'react-redux';
import { removeHero } from '../../actions/myTeam';
import { StatusTeam } from './HeroesComponents/StatusTeam';

export const Team = () => {

  const {data:myTeam} = useSelector(state => state.myTeam)
  const dispatch = useDispatch()
  

   const handleRemove = (e)=>{
    const id = e.target.accessKey
    dispatch(removeHero(myTeam, id ))
  };

    if(!!myTeam[0] === false){

      return(
          <>
            <NavBar/>
              <div>
                <h3 className="m-5">
                  Build your team with the heroes that you can search from the search tab
                </h3>
              </div>

            </>)


    }else{
      return (
        <>
          <NavBar/>
          <StatusTeam/>
          <div className="  container-sm mt-5" >

               <div className="row row-cols-1  ">

                 {

     myTeam.map((hero)=>{


       const data =  {
         labels: ["intelligense", "strength", "speed", "durability", "power", "combat"],
         datasets: [
           {
             label: 'Powerstats,',
             data: [hero.powerstats.ntelligense, hero.powerstats.strength, hero.powerstats.speed, hero.powerstats.durability, hero.powerstats.power, hero.powerstats.combat],
             backgroundColor: 'rgba(81, 255, 0, 0.203)',
             borderColor: 'rgba(51, 160, 0, 1)',
             borderWidth: 1,
           },
         ],
       };

       const options = {
         scale: {
           ticks: { beginAtZero: true },
         },
       };

       return(

         <div className="col-sm  " key={hero.id}>

             <div className="card mb-5 shadow-lg " style={{width: 18+"rem"}}>

             <div className="cardHover">
                 <img src={hero.image.url} className="card-img-top " alt="HeroImg"/> 
                 <div className="cardHover__hover" id="canvas">

                 <Radar data={data} options={options} />

                 </div>
             </div>

               <div className="card-body">
                 <h5 className="card-title">{hero.name}</h5>                                         

                 <div className="d-flex justify-content-between">
                  <button type="button" accessKey={hero.id} className="btn btn-outline-danger btn-sm " onClick={handleRemove}>Remove </button>

                  <button type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target={"#staticBackdrop"+hero.id}>
                  Details
                  </button>


                  <div className="modal fade" id={"staticBackdrop"+hero.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">



                        <div className="card mb-3" style={{maxWidth: 1000+"px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={hero.image.url} className="img-fluid rounded-start" alt="img Hero"/>
                                </div>
                                <div className="col-md-8">
                                   <div className="card-body">
                                        <h4 className="card-title">{hero.name}</h4>
                                        <ul>
                                            <li><p>Peso: {hero.appearance.weight[1]}</p></li>
                                            <li><p>Altura: {hero.appearance.height[1]}</p></li>
                                            <li><p>Color de ojos: {hero.appearance.eyeColor}</p></li>
                                            <li><p>Color de cabello: {hero.appearance.hairColor}</p></li>
                                            <li><p>Logar de trabajo: {hero.work.base}</p></li>
                                            <li><h5>Alias:</h5> <ul>{

                                                      hero.biography.aliases.map(alias  => (

                                                          <li key={alias} className="listStyleNone"> {alias} </li>

                                                      ))
                                            }</ul></li>
                                        </ul>
                                   </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </div>

       )})
   };

  </div>
</div>

    </>
  )}};


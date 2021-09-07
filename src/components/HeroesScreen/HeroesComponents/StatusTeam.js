import React from 'react'
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';



export const StatusTeam = () => {

    const {data:myData} = useSelector(state => state.myTeam)
    const acum = (a, b) => a + b;

    const teamPower = myData.map(hero=>parseInt(hero.powerstats.power)).reduce(acum)
    const teamCombat= myData.map(hero=>parseInt(hero.powerstats.combat)).reduce(acum)
    const teamDurability = myData.map(hero=>parseInt(hero.powerstats.durability)).reduce(acum)
    const teamSpeed = myData.map(hero=>parseInt(hero.powerstats.speed)).reduce(acum)
    const teamIntelligence = myData.map(hero=>parseInt(hero.powerstats.intelligence)).reduce(acum)
    const teamStrength = myData.map(hero=>parseInt(hero.powerstats.strength)).reduce(acum)

    const averageWeight =parseInt( myData.map(hero=>parseInt(hero.appearance.weight[1].split( " ", 1))).reduce(acum) / myData.length);
    const averageHeight =parseInt( myData.map(hero=>parseInt(hero.appearance.height[1].split( " ", 1))).reduce(acum) / myData.length);


    const representativeAbility = Math.max.apply(null, [teamPower, teamCombat, teamDurability, teamSpeed, teamIntelligence, teamStrength ])

    const representativeAbilityActive = teamPower === representativeAbility ? "Power" :
                                        teamCombat === representativeAbility ? "Combat" :
                                        teamDurability === representativeAbility ? "Durability" :
                                        teamSpeed === representativeAbility ? "Speed" :
                                        teamIntelligence === representativeAbility ? "Intelligence" :
                                        teamStrength === representativeAbility ? "Strength" : null; 
   

    const data = {
      labels: ["intelligense", "strength", "speed", "durability", "power", "combat"],
      datasets: [
        {
          label: 'powerstats, of Team',
          data: [teamIntelligence, teamStrength, teamSpeed, teamDurability, teamPower, teamCombat],
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    };
    
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };



    return (
        <>
            
            <div className=" row m-2" >          
              <div className="col statusTeam  " >
                <div className='header'>
                  <h1 className='title'>Vertical Bar Chart</h1>
                </div>
                <Line data={data} options={options} />           
               </div>
              <div className=" col  align-self-center">
                <h3>Representative team skill: {representativeAbilityActive}</h3>
                <h5>Average weight of my team: {averageWeight}kg</h5>
                <h5>Average height  of my team: {averageHeight}cm</h5>
              </div>            
            </div>
        </>
    )
};

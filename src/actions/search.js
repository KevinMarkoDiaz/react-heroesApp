import axios from 'axios';
import { types } from '../types/types';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss'



//Llamada a api Heroes para recibir la lista de coincidencias con en nombre solicitado

export const heroSearch = (data)=>{

    const {search: hero} = data 
         
    return async(dispatch)=>{
       
            const res = await axios.get(`https://superheroapi.com/api/10226000777461921/search/${hero}`);
            const errorNotFound = res.data.error
            const data = res.data.results

        try {
           
            if (!!data === false) {

                Swal.fire(`${errorNotFound}`, 'Access is denied ', 'error')
                
            } else {

                dispatch(setDataSearch(data))
            }

        } catch (error) {
            console.log(error)
        }
    }
};


//Llamada a api para solicitar informacion requeria por ID


export const searchDetailsId = (id)=>{

    return async (dispatch)=>{

        try{

        const config = {

            url: `https://superheroapi.com/api/10226000777461921/${id}`,
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'origin':'x-requested-with',
                'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
                'Content-Type': 'application/json',
            }

        }

        const res = await axios(config);
        const dataDetail = res.data;
        
        dispatch(setDataDetails(dataDetail));

        }catch(error){

        }
    }
};


const setDataSearch = (data)=>({
    type: types.startSearchHero,
    payload:{
        data
    }

});

export const clearDataSearch = ()=>({

    type: types.clearSearchHero,
    payload:{
        data:[]
    }
})

const setDataDetails = (data)=>({
    type: types.showDetails,
    payload:{
        data
    }

})

export const clearDataDetails = ()=>({

    type: types.clearDetails,
    payload:{
        data:[]
    }
})







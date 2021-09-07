import React from 'react';
import {  useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  
  } from "react-router-dom";
  
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from "../components/auth/LoginScreen";
import { HeroDetails } from "../components/HeroesScreen/HeroDetails";
import { HeroSearch } from "../components/HeroesScreen/HeroSearch";
import { Team } from "../components/HeroesScreen/Team";


export const AppRouter = () => {
  

  const { token:tokenRedux} = useSelector(state => state.authReducer);


    return (
        <Router>        
         
            <div>
               <Switch>           
                  <PrivateRoute 
                      exact 
                      path="/" 
                      component={Team}
                      isAuthenticated={!!tokenRedux}
                      /> 

                  <PrivateRoute 
                      exact 
                      path="/detail" 
                      component={HeroDetails}
                      isAuthenticated={!!tokenRedux}
                      />   

                  <PrivateRoute 
                      exact 
                      path="/search" 
                      component={HeroSearch}
                      isAuthenticated={!!tokenRedux}
                      /> 

                  <PublicRoute 
                      exact 
                      path="/login" 
                      component={LoginScreen}
                      isAuthenticated={!!tokenRedux}
                      />

                  <Redirect to='/'/>                   
           
              </Switch>
            </div>           
          
        </Router>

    ) 
    
};

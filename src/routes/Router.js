import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cart from "../screens/Cart/Cart";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Login from "../screens/Login/Login";
import Profile from "../screens/Profile/Profile";
import Restaurant from "../screens/Restaurant/Restaurant";
import SignUp from "../screens/SignUp/SignUp";


const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={'/home'}>
          <HomeScreen/>
        </Route>
        <Route exact path={'/login'}>
          <Login/>
        </Route>
        <Route exact path={'/signup'}>
          <SignUp/>
        </Route>
        <Route exact path={'/restaurant/:id'}>
          <Restaurant/>
        </Route>
        <Route exact path={'/cart'}>
          <Cart/>
        </Route>
        <Route exact path={'/profile'}>
          <Profile/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;

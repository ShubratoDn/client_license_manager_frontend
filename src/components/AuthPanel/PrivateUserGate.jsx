import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isUserLoggedIn } from 'services/auth';

function PrivateUserGate() {

    let isLoggedin = isUserLoggedIn();

    return isLoggedin ? <Outlet></Outlet> : <Navigate to={"/authentication/sign-in"}></Navigate>
}

export default PrivateUserGate
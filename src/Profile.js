import React from "react";
import InputGrp from './InputGrp';
import { ReactComponent as LogoutIcon } from "./logout.svg";



const Profile = (props) => {


    return (
        <>
            <p>{props.accessToken}</p>
            <h4>Profile</h4>
            <InputGrp name="fullname" initialValue={props.fullName} type="text" placeholder="Full Name"/>
            <InputGrp name="email" initialValue={ props.email} type="email" placeholder="Email"/>
            <InputGrp name="passwd" initialValue="" type="password" placeholder="Password"/>
            <LogoutIcon/>
        </>
    );
}

export default Profile;
import React, {useEffect, useState} from 'react' 
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { gapi } from "gapi-script";


export default function Login() {
    const clientId = "768790428277-o7s4l5kvevqbqg4g48s9kbru6aik6s5h.apps.googleusercontent.com"
    const [showLoginButton, setShowLoginButton] = useState(true)
    const [showLogoutButton, setShowLogoutButton] = useState(false)

    gapi.load("client:auth2", () => {
        gapi.client.init({
          clientId:"768790428277-o7s4l5kvevqbqg4g48s9kbru6aik6s5h.apps.googleusercontent.com",
          plugin_name: "chat",
        });
      });
    
    window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
            clientId: '768790428277-o7s4l5kvevqbqg4g48s9kbru6aik6s5h.apps.googleusercontent.com',
            plugin_name: "chat"
        })
    })

    const onLoginSucces = (res) => {
        let resp =  res.profileObj.imageUrl;
        console.log('Login Succes:', resp)
        setShowLoginButton(false)
        setShowLogoutButton(true)
    }
    
    const onFailureSuccess = (res) => {
        console.log('Login Failed:', res)
    }

    const onSignoutSucces = () => {
        alert("You have been signed out successfully")
        setShowLoginButton(true)
        setShowLogoutButton(false)
    }
    return (
        <div>
            {showLoginButton ?
            <GoogleLogin
            clientId= {clientId}
            buttonText="Login"
            onSuccess={onLoginSucces}
            onFailure={onFailureSuccess}
            cookiePolicy={'single_host_origin'} 
            /> : null }

            {showLogoutButton ? 
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSignoutSucces}
            >
            </GoogleLogout> : null }
        </div>
    )
}
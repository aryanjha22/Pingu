import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from '../firebase'
import { actionTypes } from '../Reducers/Reducer'
import {useStateValue} from '../Reducers/StateProvider'


function Login() {

    const [{}, dispatch] = useStateValue()

    const signIn = () =>{
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => alert(error.message))

    }

    return (
        <div className='login'>
            <div className='login_container'>
                <img
                    src='https://cdn.iview.abc.net.au/thumbs/1200/zy/publicity_ZY4214A.jpg'
                    alt=""
                />
                <div className='login_text'>
                    <h1>Sign In to Pingu!</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login

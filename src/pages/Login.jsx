
import LoginForm from "../components/LoginForm"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


import { app, auth, signInWithEmailAndPassword } from "../firebase/firebase.js";




function Login() {

    let login = (values) => {
        console.log(values)
        signInWithEmailAndPassword(auth, values.Email, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("login sucess",user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error",error)
            });

    }



    return (


        <div className='container'>
            <div className="row justify-content-center align-items-center p-5">
                <div className="col col-lg-6 p-5">
                    <LoginForm login={login} />

                    Don't have an account? <Link to={'/signup'} >Signup</Link>



                </div>
            </div>
        </div>
    )
}

export default Login;
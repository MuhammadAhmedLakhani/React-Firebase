import SignupForm from "../components/SignupForm.jsx";
import {
    app, auth,
    createUserWithEmailAndPassword
} from "../firebase/firebase.js"
// import { useNavigate } from "react-router-dom";



function Signup() {

    let registerUser = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                // BackToLogin()


                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }

    // let BackToLogin = ()=> {
    //     const navigate = useNavigate()
    //             navigate("/login")
    // }


    return (
        <div className="row justify-content-center vh-100 align-items-center">
            <div className="col-6   ">
                <SignupForm register = {registerUser} />

            </div>
        </div>
    )
}

export default Signup;
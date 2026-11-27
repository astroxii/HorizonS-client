import { useEffect } from "react";
import { Link } from "react-router";

function Login({user, setTitle})
{
    useEffect(() => {setTitle("HorizonS | Login");});

    return(
        <main className="flex justify-center content-center w-full h-screen">
            <form className="w-fit m-auto">
                <h2>Log in to <span className="HorizonS">HorizonS</span></h2>
                <label>
                    <h3><img src="" alt="username_email_icon.png" />Username or E-Mail</h3>
                    <input type="text" placeholder="Username or E-Mail" />
                </label>
                <label>
                    <h3><img src="" alt="password_icon.png" />Password</h3>
                    <input type="password" placeholder="Password" />
                </label>
                <div className="horz-div"></div>
                <label>
                    <h3>Keep logged in?</h3>
                    <input type="checkbox" />
                </label>
                <Link to="/register">Create an account</Link>
            </form>
        </main>
    );
}

export default Login;
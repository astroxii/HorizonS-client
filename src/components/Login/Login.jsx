import { useEffect } from "react";

function Login({user, setTitle})
{
    useEffect(() => {setTitle("HorizonS | Login");});

    return(
        <main className="flex justify-center content-center w-full h-screen">
            <form className="w-fit m-auto">
                <h2>Log in to <span className="HorizonS">HorizonS</span></h2>
            </form>
        </main>
    );
}

export default Login;
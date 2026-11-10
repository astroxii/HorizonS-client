import { Link, NavLink } from "react-router";

function Header({user})
{
  return (
    <header className="inline-flex justify-center content-center bg-white dark:bg-black py-5 w-full shadow-md">
        <nav className="inline-flex justify-center content-center mr-auto text-zinc-300">
            <NavLink to="/" className="mx-5"><img alt="LOGO" src="/images/logo.png" className="w-40"/></NavLink>
            
            <ul className="inline-flex justify-center content-center gap-5 text-lg font-normal my-auto">
                <li>
                    <NavLink to="/forums">Forums</NavLink>
                </li>
                <li>
                    <NavLink to="/groups">Groups</NavLink>
                </li>
                <li>
                    <NavLink to="/weekly-hightlights">Weekly Highlights</NavLink>
                </li>
            </ul>
        </nav>
        <div className="inline-flex justify-center content-center gap-5 ml-auto mx-5">
            {
                user ?
                <>
                    <button>
                        <img alt="User icon" src={`${user.avatarURL || ""}`} />
                        <p>{user.username}</p>
                    </button>
                </>
                :
                <>
                    <Link className="my-auto text-white text-lg" to="/login">Login</Link>
                    <span className="my-auto text-zinc-400 select-none">OR</span>
                    <Link className="my-auto text-purple-400 text-lg" to="/register">Register</Link>
                </>
            }
        </div>
    </header>
  );
}

export default Header;

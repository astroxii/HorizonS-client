import { Link, NavLink } from "react-router";

function Header({user})
{
  return (
    <header className="inline-flex justify-center content-center bg-white dark:bg-black py-5 w-full shadow-md z-1 relative">
        <nav className="inline-flex justify-center content-center mr-auto text-black dark:text-zinc-300">
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
        <div className="inline-flex justify-center content-center gap-2.5 ml-auto mx-5">
            {
                user ?
                <>
                    <button className="inline-flex justify-center content-center cursor-pointer gap-2 rounded-md p-0.5 px-2 shadow-sm" title="Profile and settings">
                        <img className={`w-7.5 h-7.5 rounded-full ${user.avatarURL ? "" : "dark:invert"}`} alt="User icon" src={`${user.avatarURL || "/images/genericUserIcon.png"}`} />
                        <p className="text-black dark:text-zinc-300 m-auto"><span className="text-zinc-400">@</span>{user.username}</p>
                    </button>
                    <button className="cursor-pointer rounded-md px-1"  title="Logout">
                        <img className="w-7.5 h-7.5 dark:invert" alt="Logout icon" src="/images/logoutIcon.png" />
                    </button>
                </>
                :
                <>
                    <Link className="my-auto text-purple-400 text-lg" to="/login">Login</Link>
                    <span className="my-auto text-zinc-400 select-none">OR</span>
                    <Link className="my-auto text-black dark:text-white text-lg" to="/register">Register</Link>
                </>
            }
        </div>
    </header>
  );
}

export default Header;

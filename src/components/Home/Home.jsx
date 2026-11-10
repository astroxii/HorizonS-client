import { useState } from "react";
import onSubmit from "./onSubmit";

function Home({user})
{
  const [searchHistory, setSearchHistory] = useState(JSON.parse(localStorage.getItem("searchHistory")) || []);
  const [search, setSearch] = useState(null);

  return (
    <main className="inline-flex bg-white dark:bg-black w-screen min-h-screen">
        <div className="w-full h-fit inline-flex justify-center content-center mx-auto">
          <form onSubmit={(e) => onSubmit(e, search, setSearch)}>
            <label>
              <input className="text-zinc-300 border-2 border-zinc-300 rounded-md p-1 outline-none" type="text" name="search" placeholder="Search" />
              <ul>
                {
                  searchHistory.map((s) =>
                  {
                    return ( 
                      <li>{s}</li>
                    );
                  })
                }
              </ul>
            </label>
          </form>
        </div>
    </main>
  );
}

export default Home;

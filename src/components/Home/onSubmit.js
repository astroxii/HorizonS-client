function onSubmit(e, currentSearch, setSearch)
{
    e.preventDefault();
    e.target.search.blur();

    const searching = e.target.search.value;

    if(searching === currentSearch)
    {
        console.log("equal");
    }
    else
    {
        setSearch(searching);
        console.log("submit");
    }
}

export default onSubmit;
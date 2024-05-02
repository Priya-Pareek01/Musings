const Pagination = () =>{
    return(
        <div className="flex justify-between text-xs text-white">
            <button className="bg-red-600 py-2 px-4"> Previous </button>
            <button className="bg-red-600 py-2 px-6"> Next </button>
        </div>
    );
}

export default Pagination;
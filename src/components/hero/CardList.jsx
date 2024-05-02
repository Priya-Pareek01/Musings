import Card from "./Card";
import Pagination from "./Pagination";

const CardList = () =>{
    return(
        <div className="w-fit md:pl-[220px] md:pr-6 md:m-0 m-auto"> 
            <h1 className="md:text-xl text-base font-bold "> Recent Posts </h1>
            <Card />
            <Card />
            <Card />
            <Card />
            <Pagination />
        </div>
    );
}

export default CardList;
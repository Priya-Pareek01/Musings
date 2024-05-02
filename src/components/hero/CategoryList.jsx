import CategoryItems from "./CategoryItems";

const CategoryList = () => {
    return(
        <div className='flex flex-col items-center w-screen m-auto'>
            <h1 className="font-bold text-center my-7 text-base md:text-xl"> Popular Catagories </h1>
            <div className="flex gap-6 justify-center flex-wrap md:flex-nowrap text-base md:text-xs font-semibold md:mx-0 mx-14" >
                <CategoryItems />
            </div>
        </div>
    );
}

export default CategoryList;

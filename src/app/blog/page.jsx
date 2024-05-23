import CardList from "@/components/hero/CardList";
import Menu from "@/components/hero/Menu";

const Blog =  ({searchParams})=>{
    const page = parseInt(searchParams.page) || 1;
    const {cat} = searchParams;

    return(
        <div className="w-screen"> 
            <h1 className=" bg-green-500 md:my-8 mt-6 mx-auto text-center py-2 w-1/2 text-white text-xl capitalize">
                {cat} Blogs </h1>
            <div className="flex w-screen my-14  gap-12">
                <CardList page={page} cat= {cat}/>
                <Menu />
            </div>
        </div>
    );
}

export default Blog;
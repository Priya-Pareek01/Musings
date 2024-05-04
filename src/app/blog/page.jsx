import CardList from "@/components/hero/CardList";
import Menu from "@/components/hero/Menu";

const Blog =  ()=>{
    return(
        <div className="w-screen"> 
            <h1 className="w-[800px] bg-green-500 my-8 mx-auto text-center py-3 text-white text-xl"> Style Blogs </h1>
            <div className="flex w-screen my-14 gap-12">
                <CardList />
                <Menu />
            </div>
        </div>
    );
}

export default Blog;
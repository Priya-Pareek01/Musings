import Footer from "@/components/footer/Footer";
import CardList from "@/components/hero/CardList";

const Blog =  ({searchParams})=>{
    const page = parseInt(searchParams.page) || 1;
    const {cat} = searchParams;
    
    return(
        <div className="w-screen text-center"> 
            {cat? <h1 className= "text-xl font-semibold text-gray-600 capitalize px-8 mt-10 border py-1 border-e-2 border-gray-400">
                    Dive Into The World Of 
                    <span className="text-green-700 "> {cat} </span> : Explore and Enjoy </h1> :
                <h1 className= "text-xl font-semibold text-gray-600 mt-10 border px-8 py-1 border-e-2 border-gray-400">
                    Dive Into The World Of Blogs : Explore and Enjoy </h1>
            }

            <div className="flex w-screen mt-8 md:mt-12 gap-12">
                <CardList page={page} cat= {cat} isRecentPost={false} className="flex-1"/>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;
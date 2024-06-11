
import Footer from "@/components/footer/Footer";
import CardList from "@/components/hero/CardList";
import Menu from "@/components/hero/Menu";

const Blog =  ({searchParams})=>{
    const page = parseInt(searchParams.page) || 1;
    const {cat} = searchParams;
    
    return(
        <div className="w-screen"> 
            <h1 className="bg-green-500 md:my-6 mt-10 mx-auto text-center py-2 w-1/2 text-white text-xl capitalize">
                {cat} Blogs </h1>
            <div className="flex w-screen my-14  gap-12">
                <CardList page={page} cat= {cat} className="flex-1"/>
                <Menu isAdd={true} className="flex-1"/>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;
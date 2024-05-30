import Image from "next/image";
import Comments from "@/components/blogPage/Comments";
import DeletePostBtn from "@/components/blogPage/DeletePostBtn";

const GetData = async(slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        cache: "no-store",
    });
    if(!res.ok){
        console.error("failed to fetch post");
    }
    return res.json();
}

const SingeBlog = async({params}) =>{ 
    const {slug} = params;
    const data = await GetData(slug);
    
    return (
        <div className="w-screen ">
        <div className="flex justify-center md:mt-14 mt-8 md:flex-row flex-col items-center "> 

            <div className=" flex flex-col md:w-[350px] md:px-0 px-10">
                <p className="font-semibold md:text-3xl text-2xl pb-5 pt-8 leading-8 md:leading-10 w-[250px] md:w-[350px] ">
                    {data?.title}
                </p>
                
                <div className="flex items-center gap-2 md:pt-16 pb-5 md:pb-0 ">
                    {data?.user?.image &&
                        <Image src={data.user.image} height={500} width={500} alt="profile" className="w-7 h-7 rounded-[50%]"/>
                    }
                    <div>
                        <p className="text-xs pb-1"> {data?.user?.name} </p>
                        <p className="text-[8px]">22.02.2022</p>
                    </div>
                </div>
            </div>

            <div className="md:w-[400px] w-[300px] h-max ">
                <Image src={data? data.img : "/wrong-icon.png"} width={600} height={600} alt="post-img" priority={true}/>
            </div>
        </div>

        <DeletePostBtn slug={slug}/>

        <div dangerouslySetInnerHTML={{__html: data?.desc || ''}} className="m-auto pt-12 md:w-2/3 w-[280px] "/>
        <Comments postSlug= {slug}/>
        </div>
    );
}

export default SingeBlog;


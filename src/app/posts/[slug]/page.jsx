import Image from "next/image";
import Comments from "@/components/blogPage/Comments";

const GetData = async(slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        cache: "no-store",
    });
    if(!res.ok){
        throw new error("failed to fetch post");
    }
    return res.json();
}

const SingeBlog = async({params}) =>{
    const {slug} = params;

    const data = await GetData(slug);

    return (
        <div className="w-screen">
        <div className="flex justify-center mt-10 md:flex-row flex-col items-center md:items-end "> 

            <div className=" flex flex-col md:w-96 justify-between py-4 ">
                <p className="font-bold md:text-3xl text-xl md:pb-12 pb-5 leading-6 md:leading-10 md:w-[350px] w-[250px] ">
                    {data?.title}
                </p>

                <div className="flex items-center gap-2">
                    {data?.user?.image &&
                        <Image src={data.user.image} height={500} width={500} alt="profile" className="w-7 h-7 rounded-[50%]"/>
                    }
                    <div>
                        <p className="text-xs pb-1"> {data?.user?.name} </p>
                        <p className="text-[8px]">22.02.2022</p>
                    </div>
                </div>
            </div>

            <div className="w-[400px] md:inline-block hidden">
                <Image src={data.img} width={400} height={500} alt="post-img" />
            </div>
        </div>

        {/* <div dangerouslySetInnerHTML={{__html: data?.desc}}/> */}

        <Comments postSlug= {slug}/>
        </div>
    );
}

export default SingeBlog;
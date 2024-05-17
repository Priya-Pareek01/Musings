import Image from "next/image";
import Comments from "@/components/blogPage/Comments";

const SingeBlog = () =>{
    return (
        <div className="w-screen">
        <div className="flex justify-center mt-10 md:flex-row flex-col items-center md:items-end "> 

            {/* for mobile devices
            <div className="w-40 inline-block md:hidden">
                <Image src="/kerlaImg.png" width={400} height={500} alt="profile" />
            </div> */}

            <div className=" flex flex-col md:w-96 justify-between py-4 ">
                <p className="font-bold md:text-3xl text-xl md:pb-12 pb-5 leading-6 md:leading-10 md:w-[350px] w-[250px] ">pariatur Lorem repellat iure pariatur. Saepe et harum ullam animi</p>
                <div className="flex items-center gap-2">
                    <Image src="/kerlaImg.png" height={500} width={500} alt="profile" className="w-7 h-7 rounded-[50%]"/>
                    <div>
                        <p className="text-xs pb-1"> Priya pareek </p>
                        <p className="text-[8px]">22.02.2022</p>
                    </div>
                </div>
            </div>

            <div className="w-[400px] md:inline-block hidden">
                <Image src="/kerlaImg.png" width={400} height={500} alt="profile" />
            </div>
        </div>

        <div  className="md:w-[66%] w-[85%] md:ml-[225px]  pt-3 md:pt-6 m-auto text-xs">
            <p> Lorem ipsum dolor sit sit amet consectetur adipisicing elit. Eveniet molestias nemo placeat non distinctio, modi quae quaerat autem quibusdam est iure error distinctio, modi quae quaerat autem quibusdam vero inventore illo soluta consequuntur amet ducimus</p>
            <p className="text-sm font-semibold pt-2"> Lorem ipsum dolor sit ametcommodi</p>
            <p > Lorem ipsum dolor sit sit amet consectetur adipisicing elit. Eveniet molestias nemo placeat non distinctio, modi quae quaerat autem quibusdam est iure error distinctio, modi quae quaerat autem quibusdam vero inventore illo soluta consequuntur </p>
            <p className="pt-3 md:inline-block hidden"> Lorem ipsum dolor sit sit amet consectetur adipisicing elit. Eveniet molestias nemo placeat non distinctio, modi quae quaerat autem quibusdam est iure error distinctio, modi quae quaerat autem quibusdam vero inventore illo soluta </p>
        </div>

        <Comments />
        </div>
    );
}

export default SingeBlog;
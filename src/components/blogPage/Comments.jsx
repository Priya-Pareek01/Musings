import Image from "next/image";
import Kerla from "@/components/thumbnails/kerlaImg.png"

const Comments = () =>{
    return(
        <div className="flex flex-col md:ml-[225px] gap-2 pt-8 ml-8 ">
            <div> <h1 className="text-lg font-semibold pl-1 pb-4"> Comments </h1> </div>
            <div  className="flex gap-2 ">
                <textarea className="w-[70%] bg-gray-200 placeholder:p-3" 
                    placeholder="Write a comment..."/>
                <button className="bg-green-600 text-white p-2"> Send </button>
            </div>

            <div>
                <div className="flex flex-col gap-2 pt-8">
                    <div className="flex items-center gap-2">
                        <Image src={Kerla} alt="profile" className="w-7 h-7 rounded-[50%]"/>
                        <div>
                            <p className="text-xs pb-1"> Priya pareek </p>
                            <p className="text-[8px]">22.02.2022</p>
                        </div>
                    </div>
                    <p className="md:w-[75%] w-[95%] text-xs"> Lorem ipsum dolor sit sit amet consectetur adipisicing elit. Eveniet molestias nemo placeat non distinctio, modi quae quaerat autem quibusdam est iure error distinctio, modi quae quaerat autem quibusdam vero inventore illo soluta consequuntur </p>
                </div>

                <div className="flex flex-col gap-2 pt-8">
                    <div className="flex items-center gap-2">
                        <Image src={Kerla} alt="profile" className="w-7 h-7 rounded-[50%]"/>
                        <div >
                            <p className="text-xs pb-1"> Priya pareek </p>
                            <p className="text-[8px]">22.02.2022</p>
                        </div>
                    </div>
                    <p className="md:w-[75%] w-[95%] text-xs"> Lorem ipsum dolor sit sit amet consectetur adipisicing elit. Eveniet molestias nemo placeat non distinctio, modi quae quaerat autem quibusdam est iure error distinctio, modi quae quaerat autem quibusdam vero inventore illo soluta consequuntur </p>
                </div>

                <div className="flex flex-col gap-2 pt-8">
                    <div className="flex items-center gap-2">
                        <Image src={Kerla} alt="profile" className="w-7 h-7 rounded-[50%]"/>
                        <div>
                            <p className="text-xs pb-1"> Priya pareek </p>
                            <p className="text-[8px]">22.02.2022</p>
                        </div>
                    </div>
                    <p className="md:w-[75%] w-[95%] text-xs"> Lorem ipsum dolor sit sit amet consectetur adipisicing elit. Eveniet molestias nemo placeat non distinctio, modi quae quaerat autem quibusdam est iure error distinctio, modi quae quaerat autem quibusdam vero inventore illo soluta consequuntur </p>
                </div>

                <div className="flex flex-col gap-2 pt-8">
                    <div className="flex items-center gap-2">
                        <Image src={Kerla} alt="profile" className="w-7 h-7 rounded-[50%]"/>
                        <div>
                            <p className="text-xs pb-1"> Priya pareek </p>
                            <p className="text-[8px]">22.02.2022</p>
                        </div>
                    </div>
                    <p className="md:w-[75%] w-[95%] text-xs"> Lorem ipsum dolor sit sit amet consectetur adipisicing elit. Eveniet molestias nemo placeat non distinctio, modi quae quaerat autem quibusdam est iure error distinctio, modi quae quaerat autem quibusdam vero inventore illo soluta consequuntur </p>
                </div>

                <div className="flex flex-col gap-2 pt-8">
                    <div className="flex items-center gap-2">
                        <Image src={Kerla} alt="profile" className="w-7 h-7 rounded-[50%]"/>
                        <div>
                            <p className="text-xs pb-1"> Priya pareek </p>
                            <p className="text-[8px]">22.02.2022</p>
                        </div>
                    </div>
                    <p className="md:w-[75%] w-[95%] text-xs"> Lorem ipsum dolor sit sit amet consectetur adipisicing elit. Eveniet molestias nemo placeat non distinctio, modi quae quaerat autem quibusdam est iure error distinctio, modi quae quaerat autem quibusdam vero inventore illo soluta consequuntur </p>
                </div>

            </div>
        </div>
    )
}

export default Comments;
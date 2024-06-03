import Footer from "@/components/footer/Footer";
import Image from "next/image"

const About = () =>{
    return(
        <div className="w-screen">
        <div className="flex mt-10 justify-center items-center gap-4 mx-6 ">
            <div className=" w-[80%] md:w-[500px]">
                <div className="text-lg">
                    <p className="text-base font-semibold md:inline-block hidden">
                    Welcome to MUSINGS, a dedicated space where stories unfold and insights 
                    are shared.<br/> 
                    </p>

                    <p className="pt-8 text-base pb-4 ">
                    <span className="font-semibold text-xl">Hi, It&apos;s Priya </span>, the founder and editor of Musings. With a background in 
                    computer science I have always been fascinated by the power of conversations 
                    and the insights they can reveal. <span className="md:inline-block hidden"> Through this blog, I strive to share meaningful 
                    stories that inspire and inform. </span>
                    </p>

                    <p className="text-lg font-medium md:inline-block hidden">
                        A space for readers and writers alike: Explore blogs and become a blogger yourself.
                    </p>
                </div>      
            </div>

            <div className="w-[40%] md:w-[400px]">
                <Image src="/about-img.png" alt="my-profile-photo" width={500} height={500} className="rounded-[50%]"/>
            </div>
        </div>

        <div className="mt-4 mx-auto md:w-[900px] w-[85%]">
            <p> 
                Musings was born out of a passion for storytelling and a desire 
                to learn from others. We believe that every individual has a unique 
                story to tell and valuable lessons to impart. This platform was 
                created to highlight these voices and offer a place where they can be 
                heard and appreciated.
            </p>

            <p className="pt-2">
                We invite you to explore , share your thoughts in the comments.
                If you have a story to share or know someone who does, 
                feel free to reach out.
            </p>

            <p className="pt-6 text-lg md:w-1/2 font-semibold">
                Thank you for visiting Musings. We hope you find inspiration and knowledge within our pages.
            </p>
        </div>
        <Footer />
    </div>

    )
}

export default About;
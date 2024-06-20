import CategoryList from "@/components/hero/CategoryList";
import Featured from "@/components/hero/Featured";
import CardList from "@/components/hero/CardList";
import Footer from "@/components/footer/Footer";

export default function Home({searchParams}) {
    const page = parseInt(searchParams.page) || 1;
  return (
    <div className="w-screen bg-[#FFEAE3]">
      <Featured />
      <CategoryList  />
        <div className=" w-screen my-14">
          <CardList  page={page} isRecentPost={true}/>
        </div>
        <Footer />
     </div>

  );
}

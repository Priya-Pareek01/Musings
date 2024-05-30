import CategoryList from "@/components/hero/CategoryList";
import Featured from "@/components/hero/Featured";
import CardList from "@/components/hero/CardList";
import Menu from "@/components/hero/Menu";

export default function Home({searchParams}) {
    const page = parseInt(searchParams.page) || 1;
  return (
    <div>
      <Featured />
      <CategoryList />
        <div className="flex w-screen my-14 gap-10">
          <CardList  page={page}/>
          <Menu isAdd= {true}/>
        </div>
     </div>

  );
}

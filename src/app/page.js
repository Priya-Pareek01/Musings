import CategoryList from "@/components/hero/CategoryList";
import Featured from "@/components/hero/Featured";
import CardList from "@/components/hero/CardList";
import Menu from "@/components/hero/Menu";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
        <div className="flex w-screen my-14 gap-12">
          <CardList />
          <Menu />
        </div>
     </div>

  );
}

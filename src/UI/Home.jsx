import { useLoaderData } from "react-router-dom";
import Item from "./Item";
import { fetchCategoryImage, fetchProducts } from "../services/apiStore";
import Category from "./Category";

function Home() {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div>
      <h1 className="text-red-500">Sleek</h1>
      <ul className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <Category category={cat} key={cat.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const data = fetchCategoryImage();
  return data;
}

export default Home;

import { Link } from "react-router-dom";

function Category({ category }) {
  const { id, image, name } = category;
  return (
    <li className="sm:w-80">
      <Link to="/">
        <img src={image} alt={name} className="width-full" />
        <p>{name}</p>
      </Link>
    </li>
  );
}

export default Category;

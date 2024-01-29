function Item({ obj }) {
  return (
    <li className="w-12">
      <img src={obj.images[1]} alt={obj.title} className="w-100" />
    </li>
  );
}

export default Item;

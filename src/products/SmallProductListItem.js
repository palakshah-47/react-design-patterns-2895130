export const SmallProductListItem = ({ product }) => {
  const { name, price } = product;

  return (
    <div>
      <h3>{name}</h3>
      <h3>{price}</h3>
    </div>
  );
};

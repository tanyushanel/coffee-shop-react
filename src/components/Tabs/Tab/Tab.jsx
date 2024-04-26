import { products } from "./../../../constants/data";
import { GridItem } from "./GridItem/GridItem";

export const Tab = ({ label }) => {
  const gridItems = products.filter((product) => label === product.category);

  return gridItems.map((item, index) => {
    return <GridItem item={item} key={index} />;
  });
};

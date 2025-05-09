import ProductCategoryGroup from "@/components/features/product/product-category-group";
import ProductShowcase from "@/components/features/product/product-showcase";
import Banner from "@/components/layouts/banner";
import { mockProductCatergory } from "@/constants/mock-data";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ProductShowcase></ProductShowcase>
      {mockProductCatergory.map((item, index) => (
        <ProductCategoryGroup
          key={index}
          catergory={item}
        ></ProductCategoryGroup>
      ))}
    </div>
  );
}

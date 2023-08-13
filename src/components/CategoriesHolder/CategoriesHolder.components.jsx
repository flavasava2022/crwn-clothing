import "./CategoriesHolder.styles.scss";
import CardItem from "../category-item/category-item.component";

function CategoriesHolder({ categories }) {
  return (
    <div className="categories-Holder">
      {categories.map((category) => (
        <CardItem key={category.id} categories={category} />
      ))}
    </div>
  );
}

export default CategoriesHolder;

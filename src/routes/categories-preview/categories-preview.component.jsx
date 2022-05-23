
import { CategoriesContext } from "../../contexts/categories.context";
import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <>
            {
                Object.keys(categoriesMap).map((title, index) => {
                  const products = categoriesMap[title];
                  return <CategoryPreview title={title} products={products} key={index}>
                  </CategoryPreview>
                })
            }
        </>);
}

export default CategoriesPreview;
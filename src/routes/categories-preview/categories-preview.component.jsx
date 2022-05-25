
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";


const CategoriesPreview = () => {
    const  categoriesMap = useSelector(selectCategoriesMap);
    return (
        <>
            {  categoriesMap && 
               Object.keys(categoriesMap).map((title, index) => {
                  const products = categoriesMap[title];
                  return <CategoryPreview title={title} products={products} key={index}>
                  </CategoryPreview>
                })
            }
        </>);
}

export default CategoriesPreview;
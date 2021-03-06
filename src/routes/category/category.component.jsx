import {CategoryContainer, CategoryTitle} from "./category.styles.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap, selectCategoriesIsloading } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
    const { category } = useParams();
    const categoriesMap  = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsloading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(
        () => {
            setProducts(categoriesMap[category]);
        }, [category, categoriesMap]
    )

    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? <Spinner/>:
                            <CategoryContainer>

                                {products &&
                                    products.map(product => {
                                        return <ProductCard title={product.title} product={product}
                                            key={product.id}></ProductCard>

                                    })
                                }
                            </CategoryContainer>}
      </>
    )

}

export default Category;
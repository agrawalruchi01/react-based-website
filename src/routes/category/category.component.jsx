import {CategoryContainer, CategoryTitle} from "./category.styles.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from "../../store/categories/category.selector.js";
import { useSelector } from "react-redux";

const Category = () => {
    const { category } = useParams();
    const categoriesMap  = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(
        () => {
            setProducts(categoriesMap[category]);
        }, [category, categoriesMap]
    )

    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>

                {products &&
                    products.map(product => {
                        return <ProductCard title={product.title} product={product}
                            key={product.id}></ProductCard>

                    })
                }
            </CategoryContainer> </>
    )

}

export default Category;
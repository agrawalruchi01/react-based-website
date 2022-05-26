
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";
import Spinner from "../spinner/spinner.component";
import { selectCategoriesIsloading } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";

const CategoryPreview = ({ title, products }) => {
    const isLoading = useSelector(selectCategoriesIsloading);
    return (
        <div className="category-preview-container"> 
           {  isLoading ? <Spinner/> :
           <>
            <h2>
                <Link className="title" to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className="preview">
                {
                    products.filter((_, idx) => {
                        return idx < 4
                    }).map((product) => <ProductCard product={product} key={product.id}> 
                       </ProductCard>)
                }
            </div></>}
        </div> 
    )
}

export default CategoryPreview;
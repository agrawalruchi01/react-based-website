import Button, {BUTTN_TYPE_CLASSES} from '../button/button.component';
import './product-card.styles.scss';
import { addItemToCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';


const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const dispatch = useDispatch();
    const cardItems = useSelector(selectCartItems);

    const addProductToCart = () => {
        dispatch(addItemToCart(cardItems, product));
    }

   return  <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
            <Button buttonType={BUTTN_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </div>
}

export default ProductCard;

import { addToBasket } from '../../actions';

export const addProductToBasket = (productData, dispatch) => dispatch(addToBasket(productData, (productData.inBasket = 1)));

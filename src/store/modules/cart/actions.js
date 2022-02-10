import Cart from '../../../apis/Cart';

export const getCart = ({ commit }) => {
    Cart.all().then( response => {
            commit('GET_CART', response.data);
        });
}

export const addToCart = ({ commit }, { product, quantity }) => {
    Cart.store({"product_id": product.id, "quantity": quantity});
    commit('ADD_TO_CART', { product, quantity });
}

export const removeCart = ({ commit }, cartItem) => {
    Cart.delete(cartItem.product.id);
    commit('REMOVE_CART', cartItem);
}

export const clearCart = ({ commit }) => {
    Cart.deleteAll();
    // axios.delete('http://127.0.0.1:8000/api/cart');
    commit('CLEAR_CART');
}

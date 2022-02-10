export const GET_CART = (state, cart) => {
    state.cart = cart;
}

export const ADD_TO_CART = (state, { product, quantity }) => {

    let productInCart = state.cart.find(item => {
        return item.product.id === product.id
    });

    if(productInCart){
        productInCart.quantity += quantity;
        return;
    }

    state.cart.push({
        product,
        quantity
    });
} 

export const REMOVE_CART = (state, cartItem) => {
    const index = state.cart.indexOf(cartItem);
    state.cart.splice(index, 1);
}

export const CLEAR_CART = (state) => {
    state.cart = [];
}
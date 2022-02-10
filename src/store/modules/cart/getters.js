
export const cartTotalPrice = (state) => {
    state.cartTotalPrice = 0;
    state.cart.forEach(item => {
        state.cartTotalPrice += item.quantity * item.product.price;
    });
    
    return state.cartTotalPrice;
}

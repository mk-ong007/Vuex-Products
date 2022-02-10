import Product from "../../../apis/Product";

export const getProducts = ({ commit }) => {
    Product.all().then( response => {
        commit('GET_PRODUCTS', response.data);
    });
}

export const getProduct = ({ commit }, productId) => {
    Product.show(productId).then( response => {
            commit('GET_PRODUCT', response.data);
        });
}
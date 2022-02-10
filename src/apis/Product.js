import Api from './Api';

export default {
    all() {
        return Api.get('products');
    },
    show(productId) {
        return Api.get(`products/${productId}`);
    }
}
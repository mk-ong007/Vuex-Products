import Api from './Api';

export default {
    all() {
        return Api.get('cart');
    },
    store(requestParam) {
        return Api.post('cart', requestParam);
    },
    delete(productId) {
        return Api.delete(`cart/${productId}`);
    },
    deleteAll() {
        return Api.delete('cart');
    }
}
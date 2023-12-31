export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function addToCart(product){
    return{
        type: ADD_TO_CART,// Oluşturduğumu action'nun ismi, bunu bu isimden tanıyacak
        payload: product// action ile beraber state leri etkileyecek olan veriyi göndeririz
    }
}

export function removeToCart(product){
    return{
        type: REMOVE_FROM_CART,// Oluşturduğumu action'nun ismi, bunu bu isimden tanıyacak
        payload: product// action ile beraber state leri etkileyecek olan veriyi göndeririz
    }
}
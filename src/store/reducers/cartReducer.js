import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';
import { cartItems } from '../initialValues/cartItems';

// Her kullanıcının ilk hesap açtığında dahil bir cart bilgisi olması lazım ve bu kart bilgilerini  default olarak tanımlayıp veririz. Hemen aşağıda da "initialValues" de tanımladığımız başlangıç kart değerini burada veririz
const initialState = {
    cartItems: cartItems,
};

// "cartReducer" gönderdiğimiz actiona göre sepetin son halini tutuğumuz yer. State olarak ilk değerimizi verdik ve bir action metot vermemiz gerek. Bu action içerisinde de "type" ve "payload" değerleri vardı onları veririz.
export default function cartReducer(state = initialState, {type,payload}) {
  switch (type) {
    case ADD_TO_CART:
        let product = state.cartItems.find((c)=>c.product.id === payload.productId)
        if (product) {
            product.quantity++;
            // Bu şekilde ekrandan üründe arttırım işlemi yaptığımız zaman tarayıcı üzerinde hemen değişiklik yapmaz referansında güncelleme yapmaz. Bunu yapabilmesi için aşağıdaki kodları yazarız. Eğer o üründen varsa bu if bloğuna girecek "...state" ile önceki elemanları ayıracak ve ekleme işlemini yapacak
            return {...state}
        } else {
            // ürün ilk kez eklenecekse "...state" ile sepetteki diğer ürünleri ayır, sonrasında "cartItems" için yeni bir dizi oluştur yani yeni referans, bunun içerisine "...state.cartItems" ile önceden eklenenleri ekle "payload" ile de yeni ürünleri ekle dedik.
            return { ...state, cartItems: [...state.cartItems, {quantity:1, product: payload}] };
        }

    case REMOVE_FROM_CART:
        return{
            ...state,
            cartItems:state.cartItems.filter(c=>c.product.id !== payload.productId)// filter bize bir array döndürecek "!==" ile bizim gönderdiğimiz id dışındakileri array yap dediy yani silinmesini istediğimiz yani gönderdiğimiz id yi silmiş olduk.
        }
  
    default:
        return state;
  }
}

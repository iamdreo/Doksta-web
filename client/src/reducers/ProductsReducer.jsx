const initialState = {
  products: [],
  product: {},
  error: false,
  preview: []
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload
      };
    case 'FETCH_PRODUCT':
      return {
        ...state,
        product: action.payload
      };
    case 'PREVIEW_PRODUCT':
      return {
        ...state
      };
    case 'ADD_PRODUCT':
      return {
        ...state,
        preview: [...state.preview, action.payload]
      };
    case 'ERROR':
      console.log('err');
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}

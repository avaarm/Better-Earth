import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCTS,
  ADD_PRODUCT,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.product,
        loading: false,
      };

    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
        loading: false,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        posts: [action.product, ...state.products],
        loading: false,
      };

    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => {
          return product._id !== action._id;
        }),
      };

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [action.product, ...state.favorites],
        loading: false,
      };

    case UPDATE_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites],
        loading: false,
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((product) => {
          return product._id !== action._id;
        }),
      };

    // dispatch loading
    case LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    case "LOAD_USER":
      return {
        ...state,
        username: [...state.username],
        loggedIn: [...state.loggedIn],
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    currentProduct: {
      _id: 0,
      catgeory: "",
      productName: "",
      title: "",
      thumbnail: "",
      href: "",
      summary: "",
    },
    favorites: [],
    loading: false,
    // username: "test",
    // loggedIn: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };

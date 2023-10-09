import { View, Text } from "react-native";
import React, { useEffect, useReducer } from "react";
import { AppContext } from "./Context";
import reducer from "../reducer";

const api = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  hits: [],
  page: 0,
  nbPages: 0,
  query: "react native",
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removePost = (id) => {
    alert("post removed");
    dispatch({
      type: "REMOVE_POST",
      payload: {
        id: id,
      },
    });
  };

  const searchPost = (text) => {
    dispatch({
      type: "SEARCH_POST",
      payload: {
        text: text,
      },
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "GET_PREV_PAGE",
    });
  };
  const getNextPage = () => {
    dispatch({
      type: "GET_NEXT_PAGE",
    });
  };

  const getData = async (api) => {
    dispatch({
      type: "LOADING",
    });
    try {
      const res = await fetch(api);
      const data = await res.json();

      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          page: data.page,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(`${api}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  const name = "Ankit";
  return (
    <AppContext.Provider
      value={{ ...state, searchPost, removePost, getPrevPage, getNextPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

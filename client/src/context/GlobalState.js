import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// import axios from "axios";

const initialState = {
  subjects: [],
  posts: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions: posts
  async function getSubjects() {
    try {
      const res = await axios.get("/api/v1/subjects");

      dispatch({
        type: "GET_SUBJECTS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        error: state.error,
        loading: state.loading,
        subjects: state.subjects,
        getSubjects,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

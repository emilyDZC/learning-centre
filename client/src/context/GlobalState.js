import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  subjects: [],
  posts: [],
  projects: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions: subjects
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

  async function updateSubject(subject) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.patch(
        `/api/v1/subjects/${subject.id}`,
        subject,
        config
      );

      dispatch({
        type: "UPDATE_SUBJECT",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function addSubject(subject) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/subjects", subject, config);

      dispatch({
        type: "ADD_SUBJECT",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // Actions: posts
  async function getPosts() {
    try {
      const res = await axios.get("/api/v1/posts");

      dispatch({
        type: "GET_POSTS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function addPost(post) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/posts", post, config);

      dispatch({
        type: "ADD_POST",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function deletePost(id) {
    try {
      await axios.delete(`/api/v1/posts/${id}`);

      dispatch({
        type: "DELETE_POST",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function updatePost(post) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.patch(`/api/v1/posts/${post.id}`, post, config);

      dispatch({
        type: "UPDATE_POST",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // Actions: projects
  async function getProjects() {
    try {
      const res = await axios.get("/api/v1/projects");

      dispatch({
        type: "GET_PROJECTS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function addProject(project) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/projects", project, config);

      dispatch({
        type: "ADD_PROJECT",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function updateProject(project) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.patch(
        `/api/v1/projects/${project.id}`,
        project,
        config
      );

      dispatch({
        type: "UPDATE_PROJECT",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function deleteProject(id) {
    try {
      await axios.delete(`/api/v1/projects/${id}`);

      dispatch({
        type: "DELETE_PROJECT",
        payload: id,
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
        posts: state.posts,
        projects: state.projects,
        getSubjects,
        updateSubject,
        addSubject,
        getPosts,
        addPost,
        deletePost,
        updatePost,
        addProject,
        getProjects,
        updateProject,
        deleteProject,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

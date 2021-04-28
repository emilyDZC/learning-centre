export default (state, action) => {
  switch (action.type) {
    case "GET_SUBJECTS":
      return {
        ...state,
        loading: false,
        subjects: action.payload,
      };
    case "DELETE_SUBJECT":
      return {
        ...state,
        subjects: state.subjects.filter(
          (subject) => subject._id !== action.payload
        ),
      };
    case "ADD_SUBJECT":
      return {
        ...state,
        subjects: [action.payload, ...state.subjects],
      };
    case "UPDATE_SUBJECT":
      return {
        ...state,
        subjects: [
          action.payload,
          ...state.subjects.filter(
            (subject) => subject._id !== action.payload._id
          ),
        ],
      };
    case "FILTER_SUBJECTS":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "POST_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "GET_POSTS":
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case "UPDATE_POST":
      return {
        ...state,
        posts: [
          action.payload,
          ...state.posts.filter((post) => post._id !== action.payload._id),
        ],
      };
    case "GET_PROJECTS":
      return {
        ...state,
        loading: false,
        projects: action.payload,
      };
    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project._id !== action.payload
        ),
      };
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [action.payload, ...state.projects],
      };
    case "UPDATE_PPROJECT":
      return {
        ...state,
        projects: [
          action.payload,
          ...state.projects.filter(
            (project) => project._id !== action.payload._id
          ),
        ],
      };
    default:
      return state;
  }
};

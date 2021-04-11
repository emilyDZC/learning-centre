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
    default:
      return state;
  }
};

import typeModals from "../actions/modals.action";

const reducer = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case typeModals.OPEN_EDIT_MODAL:
      return { ...state, isOpen: true, id: action.payload.id };
    case typeModals.CLOSE_EDIT_MODAL:
      return { ...state, isOpen: false, id: null };
    default:
      return state;
  }
};

export default reducer;

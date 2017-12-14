const initialState = {
  status: 'normal',
  entries: [],
  article: null
};

const blog = (state = initialState, action) => {
  switch (action.type) {
    case 'BLOG_LIST':
      return Object.assign({}, state, {
        status: action.status
      });
    default:
      return state;
  }
};

export default blog;
const config = require('config');


const entryList = (conditions) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(config.service.external_url + '/api/blog/list', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let res = await response.json();

      dispatch({
        type: 'BLOG_LIST',
        status: res.status
      });
    } catch (error) {
      console.error('error', error);
    }
  }
};

export default {
  entryList
};
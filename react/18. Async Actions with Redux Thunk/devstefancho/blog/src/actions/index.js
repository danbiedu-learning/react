import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchUserAndPosts = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));

  /* 아래 코드는 같은 방식을 chain 사용해서 표현
   _.chain(getState().posts)
     .map('userId')
     .uniq()
     .forEach(id => dispatch(fetchUser(id)))
     .value();
  */
}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
}

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  
  dispatch({ type: 'FETCH_USER', payload: response.data });
}
import { CALL_API } from './../../api/middleWare/apiMiddleWare';
import * as postApi from './../../api/postApi';

export const LOAD_POSTS = 'LOAD_POSTS';
export const GET_POSTS = 'GET_POSTS';
export const LOAD_POSTS_ERROR = 'LOAD_POSTS_ERROR';

export const getPosts = () => dispatch => {
    dispatch({
        [CALL_API]: {
            types: [LOAD_POSTS, GET_POSTS, LOAD_POSTS_ERROR],
            callApi: postApi.loadPosts
        }
    });
}
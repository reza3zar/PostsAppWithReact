import Api from "../service/Post.service"

export const LOAD_POSTS_LOADING = 'REDUX_LOAD_POSTS_LOADING';
export const LOAD_POSTS_SUCCESS = 'REDUX_LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_ERROR = 'REDUX_LOAD_POSTS_ERROR';

 

export const loadPosts = () => dispatch => {
    console.log('asdasd')

    dispatch({ type: LOAD_POSTS_LOADING });

    Api.getPosts()
        .then(response => response.json())
        .then(
            data => dispatch({ type:  LOAD_POSTS_SUCCESS, data }),
            error => dispatch({ type: LOAD_POSTS_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
};

export default loadPosts;
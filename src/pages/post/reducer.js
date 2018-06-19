import * as actions from './redux-actions';

const initialState = {
    "posts": []
};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_POSTS: {
            let newState = Object.assign({}, state, {
                "posts": [...action.payload]
            });
            return newState;
        }
        default:
            return state
    }
}
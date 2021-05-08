import { FETCH_ALL, CREATE, DELETE, UPDATE } from '../constants/actionTypes'

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        // case CREATE:
        //     return ;
        // case UPDATE:
        //     return ;
        // case DELETE:
        //     return ;
        default:
            return posts;
    }
};
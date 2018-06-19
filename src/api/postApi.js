import axios from "axios";

export function loadPosts() {
    return axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts'
    });
}
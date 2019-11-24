import { FETCH_POST, NEW_POST } from "./type";

export const fetchPosts = () => dispatch => {
    console.log("fetching")
        //to fetch api , axios can also be used instead
       //fetch returns promise (then)
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res => res.json())
       .then(posts => dispatch({
           type:FETCH_POST,
           payload: posts
       }));
}

export const createPost = postData => dispatch => {
    console.log("fetching")
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(postData) 
    })
    .then(res => res.json())
    .then(posts => dispatch({
        type:NEW_POST,
        payload: postData
    }));
}
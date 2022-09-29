import tokenService from "./tokenService";

const BASE_URL = '/api/posts';

export function create(post) {
    return fetch(BASE_URL, {
        method: 'POST',
        body: post,
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then((res) => {
        if (res.ok) return res.json();
        return res.json().then(response => {
            throw new Error(response.err)
        })
    });
}

export function deletePost(id){
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
    }}).then((res) => {
        if (res.ok) return res.json();
        throw new Error(res.error);
    });
}

export function getAll() {
    return fetch(BASE_URL, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then((res) => {
        if(res.ok){
        console.log( res )
        return res.json();

        }
        throw new Error(res.err)
    })
    }

    export function getPost(id) {
        console.log('getPost')
        return fetch(BASE_URL, + id, {
            headers: {
                'Authorization': 'Bearer ' + tokenService.getToken()
            }
        }).then(res => {

            if(res.ok) return res.json();
            throw new Error('error from getPost request')
        })
    }
import { url } from "../constants";

export const signUp = (e) => {
    e.preventDefault()
    let data = new FormData(e.currentTarget)
    let userData = {
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password')
    }
    if (data.get('password') !== data.get('re-pass')) {
        throw new Error("Password Missmatch")
    }
    return fetch(`${url}/users/register`, {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(data => {
            if (data.errors) { throw new Error(data.errors) }
            return data
        })

};


export const signIn = (e) => {
    e.preventDefault()
    let data = new FormData(e.currentTarget)
    let userData = {
        username: data.get('username'),
        password: data.get('password'),
    }
    return fetch(`${url}/users/login`, {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(data => {
            if (data.errors) { throw new Error(data.errors) }
            return data
        })
};

export const getCartContent=(outhRequest)=> {
    return outhRequest("GET", "/user/cart")
}


export const add = (bookId, outhRequest) => {

    return outhRequest("POST", "/user/cart", { bookId })
        .then(data => {
            if (data.errors) { throw new Error(data.errors) }
            return data
        })
};

export const remove=(bookId, outhRequest)=> {
    return outhRequest("DELETE", "/user/cart", { bookId })
}


import { url } from "../constants";

const upload=(file)=>{
    let data=new FormData()
    data.append('image',file)
    return  fetch(url + "/upload/cover",{
        method: "POST",
        headers: {'Accept': 'application/json, application/xml, text/plain, text/html, *.*'},
        body: data
    })
    

};


export const getCatalog = () => {
    return fetch(url + "/books/catalog")
        .then(res => res.json())
};


export const create = async(e, outhRequest) => {
    e.preventDefault()
    let data = new FormData(e.currentTarget);
    let book={...Object.fromEntries(data)};
    let response=await upload(book.image);
    let cover= await response.json();
    book.image=cover
    
   return outhRequest("POST", "/books/catalog", book)
        .then(data => {
           if (data.errors) { throw new Error(data.errors) }
            return data
       })
};  

export const updateOffer= async(e, bookId, outhRequest)=>{
    e.preventDefault()
    let data = new FormData(e.currentTarget)
    let book = { ...Object.fromEntries(data) }
    if(book.image.name){
       let response= await upload(book.image);
       let cover= await response.json();
       book.image=cover
    }
    else{ delete book.image}

    return outhRequest("PUT", `/book/${bookId}`, book)
        .then(data => {
           if (data.errors) { throw new Error(data.errors) }
            return data
        })
}


export const getSpecificBook = (bookId, user) => {
    return fetch(url + `/book/${bookId}`, {
        method: "PATCH",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({ user })
    })
        .then(res => res.json())
};

export const comment = (bookId, comment, outhRequest) => {
    return outhRequest('POST', `/book/${bookId}`, { comment })
};

export const del = (bookId, outhRequest) => {
    return outhRequest("DELETE", `/book/${bookId}`)
};
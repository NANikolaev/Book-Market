import { url } from "../constants"

function getCatalog() {
    return fetch(url + "/books/catalog")
        .then(res => res.json())
}

function create(e, outhRequest) {
    e.preventDefault()
    let data = new FormData(e.currentTarget)
    let book = { ...Object.fromEntries(data) }
    Object.values(book).forEach(b => { if (b === "") { throw new Error("Missed Field/s") } })
    return outhRequest("POST", "/books/catalog", book)
        .then(data => {
            if (data.errors) { throw new Error(data.errors) }
            return data
        })

}

function update(e, bookId, outhRequest) {
    e.preventDefault()
    let data = new FormData(e.currentTarget)
    let book = { ...Object.fromEntries(data) }

    return outhRequest("PUT", `/book/${bookId}`, book)
        .then(data => {
            if (data.errors) { throw new Error(data.errors) }
            return data
        })
}



function getSpecificBook(bookId, user) {
    return fetch(url + `/book/${bookId}`, {
        method: "PATCH",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({user})
    })
        .then(res => res.json())
}

function comment(bookId, comment, outhRequest) {
    return outhRequest('POST', `/book/${bookId}`, { comment })
}

function del(bookId, outhRequest) {
    return outhRequest("DELETE", `/book/${bookId}`)
}

export {
    create,
    update,
    del,
    comment,
    getCatalog,
    getSpecificBook,

}
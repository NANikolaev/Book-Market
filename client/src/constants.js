const url = 'http://localhost:5000' ; 

let genres=[
    {value:"crime",name:"Crime"},
    {value:"romantic",name:"Romantic"},
    {value:"thriller",name:"Thriller"},
    {value:"sci-fi",name:"Sci-Fi"},
    {value:"history",name:"History"},
    {value:"psychology",name:"Psychology"},
    {value:"biography",name:"Biography"},
    {value:"horror",name:"Horror"},
    {value:"medicine",name:"Medicine"},
    {value:"art",name:"Art"},
    {value:"philosophy",name:"Philosophy"},
    {value:"poetry",name:"Poetry"},
]
genres=genres.sort((a,b)=>a.value.localeCompare(b.value))


export {url,genres}
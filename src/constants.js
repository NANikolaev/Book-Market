const url = 'https://bookmarket-api.onrender.com' ; 

let options=[
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
];

const genres=options.sort((a,b)=>a.value.localeCompare(b.value))


export {url,genres}
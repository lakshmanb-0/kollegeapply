'use server'

export async function getData() {
    const data = await fetch('https://newsdata.io/api/1/news?apikey=pub_4570164796eb132fda81dfbb8ad9dded5559b&q=college%20OR%20exam%20OR%20admission&country=in&language=en&category=education').then(res => res.json())
    return data
}

export async function getSearch({ query }: { query: string }) {
    const data = await fetch(`http://universities.hipolabs.com/search?name=${query}`).then(res => res.json())
    return data
}
'use server'

export async function getData() {
    const data = await fetch('https://newsdata.io/api/1/news?apikey=pub_4570164796eb132fda81dfbb8ad9dded5559b&country=in&language=en&category=education').then(res => res.json())
    return data
}
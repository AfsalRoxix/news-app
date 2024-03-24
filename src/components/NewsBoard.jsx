import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"


const NewsBoard = ({category}) => {

    const [articles,setArticle] = useState([])
    useEffect(()=>{
        const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(URL)
        .then(res =>res.json())
        .then(data =>setArticle(data.articles))

    },[category])
  return (
    <div className="latestnews">
        <h2 className="text-center mt-3 ">Latest <span className="badge bg-danger ">News</span></h2>
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default NewsBoard
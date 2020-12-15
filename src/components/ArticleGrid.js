import ArticleGridItem from "./ArticleGridItem";
import {useFetchArticles} from '../hooks/useFetchArticles'
import {useState} from 'react'

export const ArticleGrid = () => {    
    const {data:articles, loading} = useFetchArticles();

    const first3Articles = articles.slice(0,3);
    const moreArticles = articles.slice(3, articles.length);
    const [showMoreArticles, setshowMoreArticles] = useState(false);

    const showMore = () =>{
        setshowMoreArticles(!showMoreArticles)
    };

    return (
        <div>
            { loading && <p>Loading </p> }

            <div className="card-columns">
                {
                    first3Articles.map( article => (
                        <ArticleGridItem 
                        key={article.id}
                        color={article.color}
                        date={article.date}
                        title={article.title}
                        paragraph={article.paragraph}/>

                    ))
                }
            </div>
         
            <div className="card-columns">
                {
                    showMoreArticles  && 
                    moreArticles.map( article => (
                        <ArticleGridItem 
                        key={article.id}
                        color={article.color}
                        date={article.date}
                        title={article.title}
                        paragraph={article.paragraph}/>
    
                    ))
                }
            </div>

            {
                !loading && !showMoreArticles &&
                    <div className="row">
                        <div className="col text-center">
                        <   button type="button" 
                                    onClick={showMore}
                                    className="btn btn-outline-danger">Read More</button>
                        </div>
                    </div>
            }
        </div>
    )
}
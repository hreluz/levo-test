import ArticleGridItem from "./ArticleGridItem";

export const ArticleGrid = () => {

    const date = '12 Sep 2018';
    const title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat';
    const paragraph = ' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  lorem impsum will uncover many web sites still in their infancy';

    return (
        <div className="card-columns">
              <ArticleGridItem 
                color='#f59926'
                date={date}
                title={title}
                paragraph={paragraph}/>
        </div>
    )
}
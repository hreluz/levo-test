import PropTypes from 'prop-types';

const ArticleGridItem = ({date, title, paragraph, color = '#007bff'}) => {

    const titleSubSstring = title.length > 40 && `${ title.substring(0, 40)} ...` ;
    const paragraphSubSstring = paragraph.length > 300 && `${ paragraph.substring(0, 300)} ...` ;

    return (
        <>
        <div className="card text-white text-left p-3" style={{backgroundColor: `${color}` }}>
            <small className="text-left">{ date }</small>
            <blockquote className="blockquote mb-0">
                <p>{titleSubSstring}</p>
                <div className="blockquote-footer text-white">
                    <small>{paragraphSubSstring}</small>
                </div>
                <button type="button" className="btn btn-outline-light mt-4">Read More</button>
            </blockquote>
        </div>
        </>
    );
}

ArticleGridItem.propTypes = {
    date: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default ArticleGridItem;

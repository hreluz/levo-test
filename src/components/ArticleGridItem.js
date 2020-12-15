import PropTypes from 'prop-types';

const ArticleGridItem = ({date, title, paragraph}) => {
    return (
        <>
        <div className="card bg-primary text-white text-center p-3">
            <small className="text-left">{ date }</small>
            <blockquote className="blockquote mb-0">
                <p>{title}</p>
                <div className="blockquote-footer text-white">
                    <small>{paragraph}</small>
                </div>
                <button type="button" className="btn btn-outline-light mt-2">Read More</button>
            </blockquote>
        </div>
        </>
    );
}

ArticleGridItem.propTypes = {
    date: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default ArticleGridItem;

import PropTypes from 'prop-types';

const Header = ({title, paragraph}) => {
    return (
        <div className="row mt-2">
            <div className="col">
                <h1 className="text-danger">{ title }</h1>
                <p>{ paragraph }</p>
            </div>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired
}

export default Header;

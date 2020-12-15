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
export default Header;
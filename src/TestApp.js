import Header from "./components/Header"

const TestApp = () => {

    const title = "Related Articles";
    const paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

    return (
        <div className="container">
            <Header title={title} paragraph={paragraph}/>
        </div>
    );
}

export default TestApp;
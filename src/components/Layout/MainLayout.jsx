import Header from "./Header";

function MainLayout(props) {
    return <div>
            <Header/>
            {props.children}
            </div>
}

export default MainLayout
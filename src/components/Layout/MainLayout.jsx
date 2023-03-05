import Header from "./Header";

function MainLayout(props) {
    return <div>
            <Header/> // need to add home button option
            {props.children}
            </div>
}

export default MainLayout
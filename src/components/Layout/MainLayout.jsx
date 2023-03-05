import Header from "./Header";
import styled from "styled-components";

function MainLayout(props) {
    return <Style.main>
            <Header/>
            {props.children}
            </Style.main>
}

export default MainLayout

const Style = {
    main: styled.div`
        height: 90%;
    `
}
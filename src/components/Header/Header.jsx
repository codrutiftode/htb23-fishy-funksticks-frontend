import styled from "styled-components";

function Header(goHome) {
    return <div>
                <Style.HomeButton onClick={goHome} ><img src="home.png"/></Style.HomeButton>
                <Style.Clock>{(new Date()).getHours()}:{(new Date()).getMinutes()} </Style.Clock>
            </div>
}

export default Header

const Style = {
    HomeButton: styled.div`
        display: inline-block;
        float: left;
        padding: 15px;
        `,
    Clock: styled.div`
        display: inline-block;
        float: right;
        font-size: xx-large;
        padding: 15px;
    `

}
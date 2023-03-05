import styled from "styled-components";
import { useNavigate } from "react-router-dom";


function Header() {

const navigate = useNavigate();

const homeClickHandler = () => {
    navigate("/");
};
    return <Style.Container>
                <Style.HomeButton onClick={homeClickHandler} ><Style.HomeButtonImg src="assets/home.png"/></Style.HomeButton>
                <Style.Clock>{(new Date()).getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:{(new Date()).getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} </Style.Clock>
            </Style.Container>
}

export default Header

const Style = {
    HBtnBg: styled.div`
    `,

    HomeButton: styled.div`
        display: inline-block;
        padding: 5px;
        border: 3px solid ${(props) => props.theme.colors.secondary};;
        border-radius:20%;
        `,

    HomeButtonImg: styled.img`
        height: 100%;
    `,

    
    Clock: styled.div`
        display: inline-block;
        font-size: 5vh;
        font-weight: bold;
        color: ${(props) => props.theme.colors.secondary};
        `,

    Container: styled.div`
        display: flex;
        flex-direction: horizontal;
        justify-content: space-between;
        background: ${(props) => props.theme.colors.primary};
        height: 10vh;
        padding: 15px;
    `,

}
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


function Header() {

const navigate = useNavigate();

const homeClickHandler = () => {
    navigate("/");
};
    return <Style.Container>
                <Style.HomeButton onClick={homeClickHandler} ><img src="assets/home.png"/></Style.HomeButton>
                <Style.Clock>{(new Date()).getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:{(new Date()).getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} </Style.Clock>
            </Style.Container>
}

export default Header

const Style = {
    HomeButton: styled.div`
        display: inline-block;
        padding: 15px;
        `,
    Clock: styled.div`
        display: inline-block;
        font-size: xx-large;
        padding: 15px;
        `,

    Container: styled.div`
        display: flex;
        flex-direction: horizontal;
        justify-content: space-between;
        background: ${(props) => props.theme.colors.primary}
    `,

}
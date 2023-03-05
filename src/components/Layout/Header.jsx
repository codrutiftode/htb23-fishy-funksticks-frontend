import styled from "styled-components";
import { useNavigate } from "react-router-dom";


function Header({}) {

const navigate = useNavigate();

const homeClickHandler = () => {
    navigate("/");
};

//only if HomeButton = true
    return <Style.Container>
                <Style.HomeButton onClick={homeClickHandler} >
          <span class="material-symbols-outlined">logout</span></Style.HomeButton>
                <Style.Clock>{(new Date()).getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:{(new Date()).getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} </Style.Clock>
            </Style.Container>
}

export default Header

const Style = {

    HomeButton: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border: 3px solid ${(props) => props.theme.colors.secondary};
        border-radius:20%;
        color: ${(props) => props.theme.colors.secondary};
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
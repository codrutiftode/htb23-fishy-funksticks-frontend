import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTranslate } from "../../scripts/useTranslate";
import { useEffect } from "react";
import { useState } from "react";



function Header({}) {
const t = useTranslate();
const navigate = useNavigate();

const [state, setState] = useState(false)

useEffect(()=>{setInterval(()=>{setState((new Date()).getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+(new Date()).getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}))},1000)},[])

const homeClickHandler = () => {
    navigate("/");
};

//only if HomeButton = true
    return <Style.Container>
                <Style.HomeButton onClick={homeClickHandler} >
          <span class="material-symbols-outlined">{t("logout")}</span></Style.HomeButton>
                <Style.Clock>{state}</Style.Clock>
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

        &:hover {
            cursor: pointer;
        }
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
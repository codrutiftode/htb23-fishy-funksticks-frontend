import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";
import ThemeProvider from "../../store/ThemeProvider";
import { useTranslate } from "../../scripts/useTranslate";


function IconButton({imgsrc,isDisabled,iconButtonClick,buttonText}){
        return <Style.IconButton onClick={iconButtonClick}>
                    <Style.ImageStyle src={imgsrc} disabled={isDisabled}/>
                    
                    <Style.ButtonText>{buttonText}</Style.ButtonText>
                    </Style.IconButton>
}

export default IconButton

const Style = {
    IconButton: styled.div`
        background: ${(props) => props.theme.colors.primary};
        padding: 2%;
        display: inline-block;
        border: 0px solid black;
        transition: all 200ms;
        width: 30%;
        margin-left: 5%;
        margin-right: 5%;
        border-radius: 5%;

        &:hover {
            border: 3px solid ${(props) => props.theme.colors.secondary}
        }
    `,

    ImageStyle: styled.img`
        width: 100%;
    `,

    ButtonText: styled.div`
        color: ${(props) => props.theme.colors.secondary};
        font-weight: bold;
        text-align: center;
        font-size: 5vw;
    `
}
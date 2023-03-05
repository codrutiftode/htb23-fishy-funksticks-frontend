import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

function SimpleButton( {padding, name, width, height, 
    fontSize, borderRadius, background, gradient, textGradient, ClickHandler} ){
    const navigate = useNavigate();


    return (
        <div>
            <Style.Custom SIZE={padding} onClick={ClickHandler} WIDTH={width} 
            HEIGHT={height} FONTSIZE={fontSize} BORDERRADIUS={borderRadius} BACKGROUND={background}
            GRADIENT={gradient} TEXTGRADIENT={textGradient}> {name} </Style.Custom>
        </div>
    );
}

export default SimpleButton

const Style = {
    Custom: styled.button`
        padding: ${ props => props.SIZE};
        width: ${ props => props.WIDTH};
        height: ${ props => props.HEIGHT};

        font-family: ${props => props.theme.font.fontFamily};
        color: ${props => props.theme.font.color};
        font-size: ${props => props.FONTSIZE};

        background-color: ${props => props.BACKGROUND}; 
        border-radius: ${props => props.BORDERRADIUS};
        border: 5px outset rgb(68, 34, 102);
        box-shadow:
            1.2px 1.2px 3.5px rgba(0, 0, 0, 0.028),
            2.9px 3px 8.3px rgba(0, 0, 0, 0.04),
            5.5px 5.6px 15.7px rgba(0, 0, 0, 0.05),
            9.8px 10.1px 27.9px rgba(0, 0, 0, 0.06),
            18.4px 18.8px 52.2px rgba(0, 0, 0, 0.072),
            44px 45px 125px rgba(0, 0, 0, 0.1);

        transition-duration: 0.4s;
        :hover {
            background-image: ${props => props.GRADIENT};
            color: ${props => props.TEXTGRADIENT};
        }
      
        `

}
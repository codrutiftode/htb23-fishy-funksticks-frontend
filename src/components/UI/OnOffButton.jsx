import styled from "styled-components";

function OnOffButton( {NAME, STATE, SetState, width, height, fontSize, 
    borderRadius, border, gradient1, gradient2} ){

    const ClickHandler = () => {
        SetState(); //when the button is clicked, the state switches
    }

const ButtonON = STATE

    return(
        <div>
            <Style.OnOff IsOn={ButtonON} onClick={ClickHandler} WIDTH={width} HEIGHT={height}
            FONTSIZE={fontSize} BORDER={border} BORDERRADIUS={borderRadius} GRADIENT1={gradient1} GRADIENT2={gradient2}> 
            {NAME} </Style.OnOff>
        </div>
    )
}

export default OnOffButton

const Style = {
    OnOff: styled.button`
       width: ${ props => props.WIDTH};
       height: ${ props => props.HEIGHT};

       font-family: ${props => props.theme.font.fontFamily};
       color: ${props => props.IsOn ? "black" : props.theme.font.color};
       font-size: ${props => props.FONTSIZE};

       background-color: ${props => props.IsOn ? props.theme.colors.tertiary : props.theme.colors.primary}; 
       border-radius: ${props => props.BORDERRADIUS};
       border: ${props => props.BORDER};
       box-shadow:
           1.2px 1.2px 3.5px rgba(0, 0, 0, 0.028),
           2.9px 3px 8.3px rgba(0, 0, 0, 0.04),
           5.5px 5.6px 15.7px rgba(0, 0, 0, 0.05),
           9.8px 10.1px 27.9px rgba(0, 0, 0, 0.06),
           18.4px 18.8px 52.2px rgba(0, 0, 0, 0.072),
           44px 45px 125px rgba(0, 0, 0, 0.1);

       transition-duration: 0.4s;
       :hover {
           background-image: ${props => props.IsOn ? props.GRADIENT2 : props.GRADIENT1};
           cursor: pointer;
        }
    `

}
import styled from "styled-components";

function OnOffButton( {NAME, STATE, SetState} ){

    const ClickHandler = () => {
        SetState(prev => !prev) //when the button is clicked, the state switches
    }

const ButtonON = STATE

    return(
        <div>
            <Style.OnOff IsOn={ButtonON} onClick={ClickHandler}> {NAME} </Style.OnOff>
        </div>
    )
}

export default OnOffButton

const Style = {
    OnOff: styled.button`
       background-color: ${props => props.IsOn ? "white" : "grey"} // if IsOn is true, it'll be grey, but if not it'll be white
    `
}
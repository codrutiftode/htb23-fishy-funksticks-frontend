import styled from "styled-components";

function MultiTextInput( {DEFAULT, SIZE, onTextChange} ) {
    return <Style.Resizable PADDING={SIZE} placeholder={DEFAULT} onInput={onTextChange}/>;
}

export default MultiTextInput

const Style ={
    Resizable: styled.textarea`
        padding: ${props => props.PADDING}
    `
}



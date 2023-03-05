import styled from "styled-components";

function MultiTextInput( {DEFAULT, SIZE} ) {
    return <Style.Resizable PADDING={SIZE} placeholder={DEFAULT} />;
}

export default MultiTextInput

const Style ={
    Resizable: styled.textarea`
        padding: ${props => props.PADDING}
    `
}



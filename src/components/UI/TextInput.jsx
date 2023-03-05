import styled from "styled-components";

function TextInput( {DEFAULT, SIZE} ) {
    return <Style.Resizable PADDING={SIZE} placeholder={DEFAULT} />;
}

export default TextInput

const Style ={
    Resizable: styled.textarea`
        padding: ${props => props.PADDING}
    `
}



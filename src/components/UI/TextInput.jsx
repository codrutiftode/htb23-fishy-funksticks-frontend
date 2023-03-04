import styled from "styled-components";

function TextInput( {DEFAULT, SIZE} ) {
    return <Style.Resizable PADDING={SIZE} type="text" placeholder={DEFAULT} />;
}

export default TextInput

const Style ={
    Resizable: styled.input`
        padding: ${props => props.PADDING}
    `
}



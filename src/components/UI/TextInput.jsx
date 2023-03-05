import styled from "styled-components";

function TextInput({ DEFAULT, SIZE, onFocus }) {
  return (
    <Style.Resizable
      PADDING={SIZE}
      type="text"
      placeholder={DEFAULT}
      onFocus={onFocus}
    />
  );
}

export default TextInput;

const Style = {
  Resizable: styled.input`
    padding: ${(props) => props.PADDING};
  `,
};

import styled from "styled-components";

function LanguageItem({language, onClick}) {
  return <Style.LanguageItem onClick={onClick}>
    {language}
  </Style.LanguageItem>
}

export default LanguageItem;

const Style = {
  LanguageItem: styled.div`
    border: 1px solid black;
    border-radius: 4px;
    padding: 8px;
    margin-top: 4px;

    &:hover {
      background-color: #eee;
      cursor: pointer;
    }
  `,
}
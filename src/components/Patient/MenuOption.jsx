import styled, { keyframes } from "styled-components";

function MenuOption(props) {
  return (
    <Style.MenuOption key={props.type} onClick={props.onClick} FONTSIZE={props.fontsize} 
    BACKGROUND={props.background} BORDERRADIUS={props.borderRadius} GRADIENT={props.gradient} 
    TEXTGRADIENT={props.textGradient}>
      <img src={props.src} alt={props.alt}  />
      <p>{props.name}</p>
    </Style.MenuOption>
  );
}

export default MenuOption;

const Style = {
  MenuOption: styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    flex: 1;
    margin: 0 0.2rem;

    font-family: ${props => props.theme.font.fontFamily};
    color: ${props => props.theme.font.color};
    font-size: ${props => props.FONTSIZE};

    background-color: ${props => props.BACKGROUND}; 
    border-radius: ${props => props.BORDERRADIUS};
    border: 3px outset rgba(68, 34, 102, 0.75);
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
    
    & img {
      width: 2rem;
      height: 2rem;
      margin-right: 0.4rem;
    }
  `,
};
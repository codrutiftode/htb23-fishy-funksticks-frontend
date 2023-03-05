import styled from "styled-components";

function PopupButton({padding, width, height, fontSize, 
  borderRadius, gradient, name, onClick, materialIcon}) {
  return (
    
    <Style.PopupButton onClick={onClick} SIZE={padding} WIDTH={width} HEIGHT={height}
    FONTSIZE={fontSize} BORDERRADIUS={borderRadius} GRADIENT={gradient}> 
      <span class="material-symbols-outlined">{materialIcon}</span>
      <p>{name}</p>
    </Style.PopupButton>
    
  );
  }

export default PopupButton;

const Style = {
  PopupButton: styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: ${ props => props.SIZE};
    width: ${ props => props.WIDTH};
    height: ${ props => props.HEIGHT};

    font-family: ${props => props.theme.font.fontFamily};
    color: ${props => props.COLOR};
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
    }


    & p {
      margin-top: 0.4rem;
    }

    & span {
      font-size: 2rem;
    }
  `,
};

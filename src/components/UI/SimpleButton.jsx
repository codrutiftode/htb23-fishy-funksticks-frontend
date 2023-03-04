import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

function SimpleButton( {PADDING, NAME, LOCATION, CLICK} ){
    const navigate = useNavigate();

    const ChangePage= () => {
       navigate(LOCATION);
    }

    return (
        <div>
            <Style.Custom SIZE={PADDING} onClick={ChangePage}> {NAME} </Style.Custom>
        </div>
    );
}

export default SimpleButton

const Style = {
    Custom: styled.button`
        padding: {SIZE}`
}
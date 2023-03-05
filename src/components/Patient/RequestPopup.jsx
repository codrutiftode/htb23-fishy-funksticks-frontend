import SimpleButton from "../UI/SimpleButton";
import MultiTextInput from "../UI/MultiTextInput";
import styled from "styled-components";

function RequestPopup({closePopup}){
    const ClickHandler= () => {
        //close it!!;
        closePopup();
      }

    return(
        <Style.container>
        <Style.question>Would you like to add any extra information?</Style.question>
        <Style.input><MultiTextInput DEFAULT={"Add more detail here"} SIZE={"4em"}></MultiTextInput></Style.input>
        <Style.btn><SimpleButton name={"Send Request"} width={"10em"} height={"4em"} fontSize={"1em"} borderRadius={"1em"} ClickHandler={ClickHandler} background={(props) => props.theme.colors.primary}></SimpleButton></Style.btn>
        </Style.container>
    )
}

export default RequestPopup

const Style = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5%;
        height: 100%;
    `,

    question: styled.div`
        display: inline-block;
        text-align: center;
        padding: 5%;
    `,

    input: styled.div`
        display: inline-block;
        margin-bottom: 0.4rem;
    `,

    btn: styled.div`
        display: inline-block;
    `


}
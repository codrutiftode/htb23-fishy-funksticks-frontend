import SimpleButton from "../UI/SimpleButton";
import TextInput from "../UI/TextInput";
import styled from "styled-components";

function RequestPopup({closePopup}){
    const ClickHandler= () => {
        //close it!!;
        closePopup();
      }

    return(
        <Style.container>
        <Style.question>Would you like to add any extra information?</Style.question>
        <Style.input><TextInput DEFAULT={"Add more detail here"} SIZE={"4em"} ></TextInput></Style.input>
        <Style.btn><SimpleButton name={"Send Request"} width={"10em"} height={"4em"} fontSize={"1em"} borderRadius={"1em"} ClickHandler={ClickHandler} background={(props) => props.theme.colors.primary}></SimpleButton></Style.btn>
        </Style.container>
    )
}

export default RequestPopup

const Style = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 5%;
        padding-top: 30%;
        padding-bottom: 30%;
        height: 100%;
    `,

    question: styled.div`
        display: inline-block;
        text-align: center;
        padding: 5%;
    `,

    input: styled.div`
        display: inline-block;
    `,

    btn: styled.div`
        display: inline-block;
    `


}
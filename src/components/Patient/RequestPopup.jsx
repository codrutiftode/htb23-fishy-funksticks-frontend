import SimpleButton from "../UI/SimpleButton";
import TextInput from "../UI/TextInput";

function RequestPopup({closePopup}){
    const ClickHandler= () => {
        //close it!!;
        closePopup();
      }

    return(
        <div>
        <p>Would you like to add any extra information?</p>
        <TextInput DEFAULT={"Add more detail here"} SIZE={"2em"} ></TextInput>
        <SimpleButton padding={"1em"} name={"Send Request"} width={"10em"} height={"4em"} fontSize={"1em"} borderRadius={"1em"} ClickHandler={ClickHandler}></SimpleButton>
        </div>
    )
}

export default RequestPopup
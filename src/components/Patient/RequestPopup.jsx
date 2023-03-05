import SimpleButton from "../UI/SimpleButton";
import TextInput from "../UI/TextInput";

function RequestPopup(){
    return(
        <div>
        <p>Would you like to add any extra information?</p>
        <TextInput DEFAULT={"Add more detail here"} SIZE={"2em"} ></TextInput>
        <SimpleButton></SimpleButton>
        </div>
    )
}

export default RequestPopup
import SimpleButton from "../UI/SimpleButton";
import TextInput from "../UI/TextInput";
import { useNavigate } from "react-router";


function NurseForm(){
    const navigate = useNavigate();
    const ClickHandler = () => {
        // sends the information
        navigate("/nurse"); // needs to only execute if authenticated
    }

    return(
        <div>        
        <p>Enter username:</p>
        <TextInput DEFAULT={"Blah"} SIZE={"0.5em"}></TextInput>
        <p>Enter password:</p>
        <TextInput DEFAULT={"Blah Blah"} SIZE={"0.5em"}></TextInput>
        <SimpleButton name={"Submit"} ClickHandler={ClickHandler}></SimpleButton>
        </div>

    )
}

export default NurseForm
import TextInput from "../UI/TextInput";


function NurseForm(){
    return(
        <div>        
        <p>Enter username:</p>
        <TextInput DEFAULT={"Blah"} SIZE={"0.5em"}></TextInput>
        <p>Enter password:</p>
        <TextInput DEFAULT={"Blah Blah"} SIZE={"0.5em"}></TextInput>
        </div>

    )
}

export default NurseForm
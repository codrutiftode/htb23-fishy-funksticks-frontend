import TextInput from "../UI/TextInput";


function NurseForm(){
    return(
        <dev>        
        <p>Enter username:</p>
        <TextInput DEFAULT={"Blah"} SIZE={"0.5em"}></TextInput>
        <p>Enter password:</p>
        <TextInput DEFAULT={"Blah Blah"} SIZE={"0.5em"}></TextInput>
        </dev>

    )
}

export default NurseForm
import styled from "styled-components";
import SimpleButton from "../UI/SimpleButton";

function NextTask() {
  return (
    <Style.NextTask>
      <Style.Vertical>
        <h3>Patient ID</h3>
        <p>314986243</p>
        <h3>Type of request</h3>
        <p>Toilet</p>
        <h3>Extra info</h3>
        <p>Just a number 1 please</p>
      </Style.Vertical>
      <SimpleButton padding={"2rem"} name="Mark as done" />
    </Style.NextTask>
  );
}

export default NextTask;

const Style = {
  NextTask: styled.div`
    border: 1px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  Vertical: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

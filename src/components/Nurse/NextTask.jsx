import styled from "styled-components";
import SimpleButton from "../UI/SimpleButton";

function NextTask({id, type, extrainfo}) {
  return (
    <Style.NextTask>
      <Style.Vertical>
        <h3>Patient ID</h3>
        <p>{id}</p>
        <h3>Type of request</h3>
        <p>{type}</p>
        <h3>Extra info</h3>
        <p>{extrainfo}</p>
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

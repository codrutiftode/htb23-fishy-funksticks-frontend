import styled from "styled-components";
import SimpleButton from "../UI/SimpleButton";

function NextTask() {
  return (
    <Style.NextTask>
      <Style.Vertical>
        <h3>Next Task</h3>
        <p>Task Name</p>
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

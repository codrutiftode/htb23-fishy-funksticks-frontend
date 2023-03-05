import styled from "styled-components";
import SimpleButton from "../UI/SimpleButton";
import { useTranslate } from "../../scripts/useTranslate";


function NextTask({id, type, extrainfo}) {
  const t = useTranslate();
  return (
    <Style.NextTask>
      <Style.Vertical>
      <h3>{t("patientid")}</h3>
        <p>{id}</p>
        <h3>{t("requesttype")}</h3>
        <p>{type}</p>
        <h3>{t("extrainfo")}</h3>
        <p>{extrainfo}</p>
      </Style.Vertical>
      <SimpleButton 
        padding={"1rem"} 
        name={t("done")} 
        fontSize={"1em"} 
        borderRadius={"10px"} 
        background={(props) => props.theme.colors.primary}
        width={"100%"}
        border={"3px outset rgba(68, 34, 102, 0.75)"}
        gradient={"linear-gradient(to right,rgb(117,71,163)0%, rgb(92,46,138)50%, rgb(71,36,107)100%)"}
         />
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

import { useState } from "react";
import { useGlobalOptions } from "@/hooks";
import { SwitchStyled } from "@/styled-components/atoms";
import { modalitiesTexts } from "@/constants";

export const Switch = () => {
  const { yearly, monthly } = modalitiesTexts;
  const [option, setOption] = useState(yearly);
  const { setModality, modality } = useGlobalOptions();
  const right = option === yearly ? "unset" : "6px";

  return (
    <article>
      <SwitchStyled
        right={right}
        onClick={() => {
          setOption(option === monthly ? yearly : monthly), setModality(option);
        }}
      ></SwitchStyled>
    </article>
  );
};
export default Switch;

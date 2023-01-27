import { useState } from "react";
import { useGlobalOptions } from "../../hooks";
import { SwitchStyled } from "../../styled-components";

export const Switch = () => {
  const [option, setOption] = useState("yearly");
  const right = option === "yearly" ? "unset" : "6px";
  const { setMode } = useGlobalOptions();

  return (
    <article>
      <SwitchStyled
        right={right}
        onClick={() => {
          setOption(option === "monthly" ? "yearly" : "monthly"),
            setMode(option);
        }}
      ></SwitchStyled>
    </article>
  );
};
export default Switch;

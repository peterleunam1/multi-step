import { Switch } from "@/components";
import { Bar } from "@/styled-components";
import { modalitiesTexts } from "@/constants";

const SwitchBar = () => {
  return (
    <Bar>
      <span>{modalitiesTexts.monthly}</span>
      <Switch></Switch>
      <span>{modalitiesTexts.yearly}</span>
    </Bar>
  );
};
export default SwitchBar;

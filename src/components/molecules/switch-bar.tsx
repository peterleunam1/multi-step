import { Switch } from "../../components";
import { Bar } from "../../styled-components";

const SwitchBar = () => {
  return (
    <Bar>
      <span>Monthly</span>
      <Switch></Switch>
      <span>Yearly</span>
    </Bar>
  );
};
export default SwitchBar;

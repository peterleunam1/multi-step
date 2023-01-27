import { isActive, options } from "../../helpers";
import { SidebarProps } from "../../interfaces";
import { Aside, OptionsStyled } from "../../styled-components";
import { Option } from "../../components";

const Sidebar = ({ number_page }: SidebarProps) => {
  return (
    <Aside>
      <OptionsStyled>
        {options.map(({ description, step }) => {
          const action: boolean = isActive(step, number_page);
          return (
            <Option
              key={step}
              description={description}
              step={step}
              isActive={action}
            />
          );
        })}
      </OptionsStyled>
    </Aside>
  );
};
export default Sidebar;

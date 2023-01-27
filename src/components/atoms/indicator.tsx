import { IndicatorProps } from "../../interfaces"
import { IndicatorStyled } from "../../styled-components"

const Indicator = ({value=1, isActive}:IndicatorProps) => {
  return (
    <IndicatorStyled isActive={isActive}>
        {value}
    </IndicatorStyled>
  )
}
export default Indicator

import { IndicatorProps } from "@/interfaces"
import { IndicatorStyled } from "@/styled-components/atoms"

const Indicator = ({value = 1, isActive}:IndicatorProps) => {
  return (
    <IndicatorStyled isActive={isActive}>
        {value}
    </IndicatorStyled>
  )
}
export default Indicator

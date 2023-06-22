import { useNavigate } from "react-router-dom";
import { useGlobalOptions } from "@/hooks";
import { TableSummaryProps } from "@/interfaces";
import { Table, Text, Th } from "@/styled-components";
import { modalitiesTexts } from "@/constants";

const TableSummary = ({ children }: TableSummaryProps) => {
  const { modality, information, setModality } = useGlobalOptions();
  const { monthly, yearly } = modalitiesTexts;
  const navigate = useNavigate();

  const handleClick = () => {
    setModality(monthly);
    navigate("/select-plan");
  };

  return (
    <Table>
      <thead>
        <tr>
          <Th>
            <strong>{`${information?.mode} (${
              modality === yearly ? yearly : monthly
            })`}</strong>

            <Text decoration="underline" onClick={handleClick}>
              Change
            </Text>
          </Th>
          <Th text_align="right">
            <strong>{information?.price}</strong>
          </Th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};
export default TableSummary;

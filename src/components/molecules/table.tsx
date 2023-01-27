import { useNavigate } from "react-router-dom";
import { useGlobalOptions } from "../../hooks";
import { TableSummaryProps } from "../../interfaces";
import { Table, Text, Th } from "../../styled-components";

const TableSummary = ({ children }: TableSummaryProps) => {
  const { mode, information, setMode } = useGlobalOptions()
  const navigate = useNavigate();

  const handleClick = () => {
    setMode("monthly");
    navigate("/select-plan");
  };

  return (
    <Table>
      <thead>
        <tr>
          <Th>
            <strong>{`${information?.mode} (${
              mode === "yearly" ? "yearly" : "monthly"
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

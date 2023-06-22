import { useState } from "react";
import {
  Icon,
  LayoutForm,
  MainComponent,
  Sidebar,
  TableSummary,
} from "@/components";
import { AddOnsProps } from "@/interfaces";
import { Text, ThankContainer, Td, Total } from "@/styled-components";
import { useGlobalOptions } from "@/hooks";
import { toShortWord, getFinalPrice } from "@/utils";
import { congratulation, modalitiesTexts } from "@/constants";
import ThankYouuImage from "../assets/icon-thank-you.svg";

export const Summary = () => {
  const data = JSON.parse(localStorage.getItem("list") || "");
  const { modality, information } = useGlobalOptions();
  const [finish, setFinish] = useState<boolean>(false);
  const priceFinally = getFinalPrice(information?.price || "");
  let suma: number = 0;

  const handleClick = () => {
    setFinish(true);
  };

  return (
    <LayoutForm>
      <Sidebar number_page={4} />
      {!finish ? (
        <MainComponent
          back_path="/add-ons"
          title="Finishing Up"
          subtitle="Double-check everything looks OK before confirming"
          back_off={true}
          justify="flex-start"
          onClick={handleClick}
          text_regular="Confirm"
        >
          <TableSummary>
            {data.map(({ title, price }: AddOnsProps) => {
              suma = suma + parseInt(price);
              return (
                <tr key={price}>
                  <Td>
                    <Text>{title}</Text>
                  </Td>
                  <Td text_align="right">
                    <strong>{`+${price}/${toShortWord(modality)}`}</strong>
                  </Td>
                </tr>
              );
            })}
          </TableSummary>
          <Total>
            <Text>
              Total:{" "}
              {`(per ${
                modality === modalitiesTexts.yearly
                  ? modalitiesTexts.year
                  : modalitiesTexts.month
              })`}
            </Text>
            <strong>{`$${suma + priceFinally}/${toShortWord(
              modality
            )}`}</strong>
          </Total>
        </MainComponent>
      ) : (
        <MainComponent
          back_path=""
          title=""
          subtitle=""
          visilityButoons={false}
        >
          <ThankContainer>
            <span>
              <Icon url={ThankYouuImage} alt="Thank you" />
            </span>
            <h1>{congratulation.title}</h1>
            <p>{congratulation.description}</p>
          </ThankContainer>
        </MainComponent>
      )}
    </LayoutForm>
  );
};
export default Summary;

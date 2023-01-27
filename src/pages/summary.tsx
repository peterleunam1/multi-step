import { useState } from "react";
import {
  Icon,
  LayoutForm,
  MainComponent,
  Sidebar,
  TableSummary,
} from "../components";
import { AddOnsProps } from "../interfaces";
import { Text, ThankContainer, Td, Total } from "../styled-components";
import ThankYouuImage from "../assets/icon-thank-you.svg";
import { useGlobalOptions } from "../hooks";

export const Summary = () => {
  const data = JSON.parse(localStorage.getItem("list") || "");
  const { mode, information } = useGlobalOptions();
  const [finish, setFinish] = useState(false);

  let priceFinally: number = 0;
  if (information?.price) {
    const infoPrice = information.price.split("/");
    const priceF = infoPrice[0].split("$");
    priceFinally = parseInt(priceF[1]);
  }

  console.log(priceFinally, typeof priceFinally);
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
                    <strong>{`+${price}/${
                      mode === "yearly" ? "yr" : "mo"
                    }`}</strong>
                  </Td>
                </tr>
              );
            })}
          </TableSummary>
          <Total>
            <Text>
              Total: {`(per ${mode === "yearly" ? "year" : "month"})`}
            </Text>
            <strong>{`$${suma + priceFinally}/${
              mode === "yearly" ? "yr" : "mo"
            }`}</strong>
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
            <h1>Thank you!</h1>
            <p>
              Thanks for confirming your subscription! We hope you have fun
              using our plataform. If you ever need support, please feel free yo
              email us at support@loremgaming.com
            </p>
          </ThankContainer>
        </MainComponent>
      )}
    </LayoutForm>
  );
};
export default Summary;

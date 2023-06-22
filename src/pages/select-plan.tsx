import { useState } from "react";
import {
  Alert,
  Card,
  LayoutForm,
  MainComponent,
  Sidebar,
  SwitchBar,
} from "@/components";
import { useGlobalOptions, useNextRoute } from "@/hooks";
import { InputRadio, SectionStyled } from "@/styled-components";
import ProImage from "../assets/icon-pro.svg";
import ArcadeImage from "../assets/icon-arcade.svg";
import AdvancedImage from "../assets/icon-advanced.svg";
import { useChosenService } from "@/hooks";

export const SelectPlan = () => {
  const { modality, setInformation } = useGlobalOptions();
  const { onPushRoute } = useNextRoute("/add-ons");
  const [alert, setAlert] = useState(false);
  const { isSelected, setIsSelected, advanced_price, arcade_price, pro_price } =
    useChosenService(modality);

  const Verify = (): boolean => {
    const { advanced, arcade, pro } = isSelected;
    if (advanced || arcade || pro) {
      return true;
    } else {
      return false;
    }
  };
  
  const handleNext = () => {
    if (Verify()) {
      onPushRoute();
    } else {
      setAlert(true);
    }
  };

  return (
    <LayoutForm>
      <Sidebar number_page={2} />
      <MainComponent
        back_path="/"
        title="Select Plan"
        subtitle="You have the option of monthly or yearly billing. "
        back_off={true}
        justify="flex-start"
        onClick={handleNext}
      >
        <Alert text="You must choose an option." vibility={alert} />
        <SectionStyled>
          <Card title="Arcade" img={ArcadeImage} selected={isSelected.arcade}>
            <p>{arcade_price}</p>
            {modality === "yearly" ? <p>2 months free</p> : ""}
            <InputRadio
              type="radio"
              name="plan"
              value={"arcade"}
              onClick={() => {
                setIsSelected({
                  arcade: true,
                  advanced: false,
                  pro: false,
                }),
                  setInformation({
                    mode: "Arcade",
                    price: arcade_price,
                  });
              }}
            />
          </Card>
          <Card
            title="Advanced"
            img={AdvancedImage}
            selected={isSelected.advanced}
          >
            <p>{advanced_price}</p>
            {modality === "yearly" ? <p>2 months free</p> : ""}
            <InputRadio
              type="radio"
              name="plan"
              value={"advanced"}
              onClick={() => {
                setIsSelected({
                  arcade: false,
                  advanced: true,
                  pro: false,
                }),
                  setInformation({
                    mode: "Advanced",
                    price: advanced_price,
                  });
              }}
            />
          </Card>
          <Card title="Pro" img={ProImage} selected={isSelected.pro}>
            <p>{pro_price}</p>
            {modality === "yearly" ? <p>2 months free</p> : ""}
            <InputRadio
              type="radio"
              name="plan"
              value={"pro"}
              onClick={() => {
                setIsSelected({
                  arcade: false,
                  advanced: false,
                  pro: true,
                }),
                  setInformation({
                    mode: "Pro",
                    price: pro_price,
                  });
              }}
            />
          </Card>
        </SectionStyled>
        <SwitchBar></SwitchBar>
      </MainComponent>
    </LayoutForm>
  );
};
export default SelectPlan;

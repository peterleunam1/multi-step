import { useEffect, useState } from "react";
import {
  Alert,
  Card,
  LayoutForm,
  MainComponent,
  Sidebar,
  SwitchBar,
} from "../components";
import { useGlobalOptions, useNextRoute } from "../hooks";
import { InputRadio, SectionStyled } from "../styled-components";

export const SelectPlan = () => {
  
  const { mode, setInformation } = useGlobalOptions()
  const {onPushRoute} = useNextRoute("/add-ons")
  const [alert, setAlert] = useState(false);
  const [isSelected, setIsSelected] = useState({
    arcade: false,
    advanced: false,
    pro: false,
  });

  let arcade_price: string = "$9/mo";
  let advanced_price: string = "$12/mo";
  let pro_price: string = "$15/mo";

  if (mode === "yearly") {
    arcade_price = "$90/yr";
    advanced_price = "$120/yr";
    pro_price = "$150/yr";
  }

  useEffect(() => {
    setIsSelected({
      arcade: false,
      advanced: false,
      pro: false,
    });
  }, [mode]);

  const { advanced, arcade, pro } = isSelected;
  const Verify = (): boolean => {
    if (advanced || arcade || pro) {
      return true;
    } else {
      return false;
    }
  };
  const option = Verify();

  const handleNext = () => {
    if (option) {
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
          <Card
            title="Arcade"
            img="/src/assets/icon-arcade.svg"
            selected={isSelected.arcade}
          >
            <p>{arcade_price}</p>
            {mode === "yearly" ? <p>2 months free</p> : ""}
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
            img="/src/assets/icon-advanced.svg"
            selected={isSelected.advanced}
          >
            <p>{advanced_price}</p>
            {mode === "yearly" ? <p>2 months free</p> : ""}
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
          <Card
            title="Pro"
            img="/src/assets/icon-pro.svg"
            selected={isSelected.pro}
          >
            <p>{pro_price}</p>
            {mode === "yearly" ? <p>2 months free</p> : ""}
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

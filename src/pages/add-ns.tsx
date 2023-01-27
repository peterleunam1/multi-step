import { useEffect, useState } from "react";
import {
  AddOnsCrad,
  Alert,
  LayoutForm,
  MainComponent,
  Sidebar,
} from "../components";
import { dataOptions } from "../helpers";
import { useGlobalOptions, useNextRoute } from "../hooks";
import { AddOnsProps } from "../interfaces";

const AddNs = () => {
  const { mode } = useGlobalOptions();
  const { onPushRoute } = useNextRoute("/summary");

  const [checked, setChecked] = useState<Array<AddOnsProps>>([]);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("list") || "[]";
    if (!data) {
      setChecked(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(checked));
  }, [checked]);

  const addItem = (item: string[]) => {
    if (!checked.find((t: AddOnsProps) => t.title === item[0])) {
      setChecked([...checked, { title: item[0], price: item[1] }]);
    } else {
      setChecked(checked.filter((i: AddOnsProps) => i.title !== item[0]));
    }
  };

  const handleNext = () => {
    if (checked.length > 0) {
      onPushRoute();
    } else {
      setAlert(true);
    }
  };

  return (
    <LayoutForm>
      <Sidebar number_page={3} />
      <MainComponent
        back_path="/select-plan"
        title="Pick Add-ons"
        subtitle="Add-ons help enhance your gaming experience."
        back_off={true}
        onClick={handleNext}
      >
        <Alert vibility={alert} text="You must choose an option" />
        {dataOptions.map((element, index) => {
          const { price } = element;
          return (
            <AddOnsCrad
              {...element}
              key={index++}
              price={mode === "yearly" ? price.year : price.month}
              onClick={() =>
                addItem([
                  element.title,
                  mode === "yearly" ? price.year : price.month,
                ])
              }
            />
          );
        })}
      </MainComponent>
    </LayoutForm>
  );
};
export default AddNs;

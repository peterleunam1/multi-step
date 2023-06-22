import { useState } from "react";
import {
  AddOnsCrad,
  Alert,
  LayoutForm,
  MainComponent,
  Sidebar,
} from "@/components";
import { dataOptions } from "@/constants";
import { useAddNs, useGlobalOptions, useNextRoute } from "@/hooks";
import { modalitiesTexts } from "@/constants";

const AddNs = () => {
  const { modality } = useGlobalOptions();
  const { onPushRoute } = useNextRoute("/summary");
  const { checked, addItem } = useAddNs();
  const [alert, setAlert] = useState(false);

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
              price={
                modality === modalitiesTexts.yearly ? price.year : price.month
              }
              onClick={() =>
                addItem([
                  element.title,
                  modality === modalitiesTexts.yearly
                    ? price.year
                    : price.month,
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

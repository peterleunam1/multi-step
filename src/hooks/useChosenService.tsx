import { SelectedServiceModel } from "@/interfaces";
import { useEffect, useState } from "react";
import { prices } from "@/constants/prices.constant";

export default function useChosenService(modality: string) {
  const [isSelected, setIsSelected] = useState<SelectedServiceModel>({
    arcade: false,
    advanced: false,
    pro: false,
  });
  let arcade_price: string = prices.monthly.arcade_price;
  let advanced_price: string = prices.monthly.advanced_price;
  let pro_price: string = prices.monthly.pro_price;

  if (modality === "yearly") {
    arcade_price = prices.yearly.arcade_price;
    advanced_price = prices.yearly.advanced_price;
    pro_price = prices.yearly.pro_price;
  }
  useEffect(() => {
    setIsSelected({
      arcade: false,
      advanced: false,
      pro: false,
    });
  }, [modality]);

  return {
    isSelected,
    setIsSelected,
    arcade_price,
    advanced_price,
    pro_price,
  };
}

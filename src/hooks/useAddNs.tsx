import { AddOnsProps } from "@/interfaces";
import { useEffect, useState } from "react";

export default function useAddNs() {
  const [checked, setChecked] = useState<Array<AddOnsProps>>([]);

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

  return {
    addItem,
    checked
  };
}

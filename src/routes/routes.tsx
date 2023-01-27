import { Route, Routes } from "react-router-dom";
import AddNs from "../pages/add-ns";
import { Home } from "../pages/home";
import SelectPlan from "../pages/select-plan";
import Summary from "../pages/summary";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/select-plan" element={<SelectPlan />} />
      <Route path="/add-ons" element={<AddNs />} />
      <Route path="/summary" element={<Summary />} />
    </Routes>
  );
};
export default RoutesComponent;

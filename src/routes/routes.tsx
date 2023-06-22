import { Route, Routes } from "react-router-dom";
import AddNs from "../pages/add-ns";
import { Home } from "../pages/home";
import SelectPlan from "../pages/select-plan";
import Summary from "../pages/summary";
import { routes } from "@/constants/routes";
import { UserGuard } from "@/guards";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route element={<UserGuard />}>
        <Route path={routes.SELECT_PLAN} element={<SelectPlan />} />
        <Route path={routes.ADD_ONS} element={<AddNs />} />
        <Route path={routes.SUMMARY} element={<Summary />} />
      </Route>
    </Routes>
  );
};
export default RoutesComponent;

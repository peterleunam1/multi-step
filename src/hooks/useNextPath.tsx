import { useNavigate } from "react-router-dom";

const useNextRoute = (path: string) => {
  const navigate = useNavigate();

  const onPushRoute = () => {
    navigate(path);
  };
  return {
    onPushRoute,
  };
};
export default useNextRoute;

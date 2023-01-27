import { OptionsContextProvider } from "./context";
import RoutesComponent from "./routes/routes";

function App() {
  return (
    <OptionsContextProvider>
      <RoutesComponent />
    </OptionsContextProvider>
  );
}

export default App;

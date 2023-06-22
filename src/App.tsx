import { OptionsContextProvider, UserContextProvider } from "./context";
import RoutesComponent from "./routes/routes";

function App() {
  return (
    <OptionsContextProvider>
      <UserContextProvider>
        <RoutesComponent />
      </UserContextProvider>
    </OptionsContextProvider>
  );
}

export default App;

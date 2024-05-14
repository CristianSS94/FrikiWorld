import "bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";

import { FrikiWorldProvider } from "./context/FrikiWorldContext";
import { RoutesApp } from "./routes/RoutesApp";

function App() {
  return (
    <FrikiWorldProvider>
      <RoutesApp />
    </FrikiWorldProvider>
  );
}

export default App;

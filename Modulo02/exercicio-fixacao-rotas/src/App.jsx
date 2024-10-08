import "primeflex/primeflex.css"
import "primeicons/primeicons.css"
import "primereact/resources/themes/lara-light-blue/theme.css"
import Paths from "./routes/Paths"
import { AuthContext } from "./contexts/AuthContext"

function App() {

  return (
    <>
      <AuthContext>
        <Paths />
      </AuthContext>
    </>
  );
}

export default App

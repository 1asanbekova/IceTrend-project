import Navbar from "./Components/Navbar/Navbar";
import UpNavbar from "./Components/Navbar/UpNavbar";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <UpNavbar />
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;

import "./styles/app.module.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Overview } from "./pages/Overview";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Overview />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;

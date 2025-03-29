import Header from "./Compnents/Header/Header";
import Admin from "../Pages/Admin/Admin";
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const reloadPath = sessionStorage.getItem("lastPath");

    // Reload only if the path changes and has not been reloaded before
    if (reloadPath !== currentPath) {
      sessionStorage.setItem("lastPath", currentPath);
      window.location.reload();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <Admin />
    </div>
  );
}

export default App;

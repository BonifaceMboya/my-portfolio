import "./App.css";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar-div">
        <button onClick={() => navigate("/")}>Launchpad</button>
        <button onClick={() => navigate("/diranode")}>DiraNode</button>
        <button onClick={() => navigate("/contact")}>The Inbox</button>
      </div>
    </>
  );
}

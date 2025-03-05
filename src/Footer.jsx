import "./App.css";

export default function Footer() {
  return (
    <>
      <div className="footer-div">
        <h5>
          Created and Managed by DiraNode &copy; {new Date().getFullYear()}
        </h5>
      </div>
    </>
  );
}

import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleClink = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Eror 404: page not found</h2>
      <p>Use the button to back</p>
      <button type="submit" onClick={handleClink}>
        Back
      </button>
    </div>
  );
}

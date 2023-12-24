import { useNavigate } from "react-router-dom";

const ErrorElement = ({ errorMessage }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 style={{ fontWeight: 400, textAlign: "center" }}>{errorMessage}</h2>
      <button onClick={() => navigate("/search")}>HomePage</button>
    </div>
  );
};

export default ErrorElement;

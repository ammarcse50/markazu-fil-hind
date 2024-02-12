
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Oops!!!</h1>

      <button className="btn btn-primary" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default ErrorPage;

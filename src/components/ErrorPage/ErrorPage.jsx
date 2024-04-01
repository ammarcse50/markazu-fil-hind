import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center  justify-center">
      <Helmet><title>Markazo | Error</title></Helmet>
      <h1 className="text-4xl">Error!! Oops!!!</h1>
      <br />
      <button
        className="btn btn-primary  btn-outline btn-secondary"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;

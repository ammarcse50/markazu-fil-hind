import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center  justify-center">
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

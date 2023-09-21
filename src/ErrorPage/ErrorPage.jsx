import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops! Something went wrong!</h2>
            <button><Link to='/'>Go back</Link></button>
        </div>
    );
};

export default ErrorPage;
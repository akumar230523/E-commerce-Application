import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import '../style/NotFound.css';

function NotFound() {
    const error = useRouteError();

    return (
        <div className='not-found'>
            <h2> {error.status} - {error.statusText} </h2>
            <p> {error.data} </p>
            <Link to='/' className='back-button'> ← Back to Home </Link>
        </div>
    );
}

export default NotFound;



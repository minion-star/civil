import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-9xl font-bold text-amber-500">404</h1>
            <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
            <p className="mt-2 text-gray-400">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="mt-6 px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-all">
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;

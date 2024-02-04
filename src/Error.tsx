import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

const ErrorPage: React.FC = () => {
    const error = useRouteError();
    console.error(error);

    if (!isRouteErrorResponse(error)) {
        return null;
    }

    return (
      <div>
        <h1>An error occurred!</h1>
        <p>{error.data}</p>
      </div>
    );
  }
export default ErrorPage
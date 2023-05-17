import { Link } from "react-router-dom";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Houve um pequeno erro.</p>
      {isRouteErrorResponse(error) ? (
        <p>
          <i>{error?.statusText || error?.data.message}</i>
        </p>
      ) : null}
      <p>
        Retorne em segurança clicando <Link to="/">aqui</Link>.
      </p>
    </div>
  );
}

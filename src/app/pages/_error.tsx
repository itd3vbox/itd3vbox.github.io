import { NextPageContext } from 'next';

interface ErrorProps {
  statusCode: number | undefined; // Accepte une valeur undefined
}

const ErrorPage = ({ statusCode }: ErrorProps) => (
  <p>
    {statusCode
      ? `Une erreur ${statusCode} s'est produite sur le serveur`
      : 'Une erreur s\'est produite sur le client'}
  </p>
);

ErrorPage.getInitialProps = async ({ res, err }: NextPageContext): Promise<ErrorProps> => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode: statusCode || undefined }; // Utilisez undefined si statusCode est falsy
};

export default ErrorPage;


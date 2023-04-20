import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function withAuth(Component) {
  function AuthenticatedComponent(props) {
    const [sessionToken, setSessionToken] = useState(null);

    useEffect(() => {
      // Get the session token from the cookie
      const cookieSessionToken = Cookies.get('session_token');
      if (cookieSessionToken) {
        setSessionToken(cookieSessionToken);
      } else {
        // Redirect the user to the login page
        window.location.href = '/';
      }
    }, []);

    if (sessionToken) {
      return <Component {...props} sessionToken={sessionToken} />;
    } else {
      return null;
    }
  }

  return AuthenticatedComponent;
}

export default withAuth;

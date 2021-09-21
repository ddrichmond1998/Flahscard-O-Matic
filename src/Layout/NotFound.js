import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <div className="NotFound">
        <div className="jumbotron bg-light text-dark shadow-lg">
          <h1 className="display-3">Not Found</h1>

          <p className="lead font-weight-bold">
            The requested page does not exsit.
          </p>
          <p>Click Below</p>
          <Link
            to="/"
            className="btn btn-primary btn-lg"
            href="#"
            role="button"
          >
            <span className="oi oi-home p-1" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
import React from "react";
import { Link, useParams } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div style={{ maxWidth: "fit-content", margin: "0 auto" }}>
      <h1 className="text-3xl">
        Page not found 404{" "}
        <Link className="text-yellow-400" to="/">
          Home
        </Link>
      </h1>
      <hr />
    </div>
  );
};

export default NotFoundPage;

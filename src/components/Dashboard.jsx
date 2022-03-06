import React from "react";

function Dashboard({ userData }) {
  return (
    <>
      {userData?.user ? (
        <div>
          <h2 className="h4">Welcome to DOCSUMO Dashboard!</h2>
          <p className="h3">
            Hello{" "}
            <span className="text-primary">
              {userData && userData.user && userData.user.full_name}
            </span>
          </p>
        </div>
      ) : (
        <>
          <p className="h4">You are not logged in.</p>
          <p className="h3">
            Please
            <a href="/" className="text-primary">
              {" "}
              Log In{" "}
            </a>
            first!
          </p>
        </>
      )}
    </>
  );
}

export default Dashboard;

import React from "react";

function Dashboard({ userData }) {
  return (
    <div>
      Dashboard
      <h2>{userData && userData.user && userData.user.full_name}</h2>
    </div>
  );
}

export default Dashboard;

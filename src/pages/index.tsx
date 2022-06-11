import Navbar from "@components/navbar/navbar";
import React from "react";
import DashboardService from "src/firebaseClient/dashboardService";

export default function Home() {
  const service = new DashboardService();

  const write = () => {
    service.writeUserData();
  };

  const push = () => {
    service.pushData();
  };

  return (
    <div>
      <Navbar selectedRoute="/" />
      <main className="content">
        <div>main screen</div>
        <div>main screen</div>
        <div>main screen</div>
        <div>main screen</div>
        <div>main screen</div>
        <div>main screen</div>
      </main>
    </div>
  );
}

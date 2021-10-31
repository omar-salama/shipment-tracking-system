import "./App.css";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import ShipmentTracking from "./ShipmentTracking";

function App() {
  const [shipmentDetails, setShipmentDetails] = useState("");

  const requestDetails = async (shipmentNumber) => {
    const shipment = await axios.get(
      `https://tracking.bosta.co/shipments/track/${shipmentNumber}`
    );
    setShipmentDetails(shipment.data);
  };

  const handleCallBack = (shipmentNumber) => {
    requestDetails(shipmentNumber);
  };
  return (
    <div className="App">
      <Navbar AppCallBack={handleCallBack} />
      <ShipmentTracking
        AppCallBack={handleCallBack}
        shipmentDetails={shipmentDetails}
      />
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import axios from "axios";
import ShipmentProgress from "./ShipmentProgress";
import TransitDetails from "./TransitDetails";
import ShippingAddress from "./ShippingAddress";
import Complaint from "./Complaint";
import Navbar from "./Navbar";

function App() {
  const [shipmentDetails, setShipmentDetails] = useState("");
  const [transitEvents, setTransitEvents] = useState("");

  const requestDetails = async (shipmentNumber) => {
    const shipment = await axios.get(
      `https://tracking.bosta.co/shipments/track/${shipmentNumber}`
    );
    setShipmentDetails(shipment.data);
    setTransitEvents(shipment.data.TransitEvents);
  };

  const handleCallBack = (shipmentNumber) => {
    requestDetails(shipmentNumber);
  };
  return (
    <div className="App">
      <Navbar parentCallBack={handleCallBack} />
      <div className="container">
        <ShipmentProgress shipment={shipmentDetails} />
        <div className="row mt-4 mb-5">
          <div className="col-12 col-md-9">
            <TransitDetails transitEvents={transitEvents} />
          </div>
          <div className="col-12 col-md-3">
            <ShippingAddress />
            <Complaint />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

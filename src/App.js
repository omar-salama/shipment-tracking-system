import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ShipmentProgress from "./ShipmentProgress";
import TransitDetails from "./TransitDetails";
import ShippingAddress from "./ShippingAddress";
import Complaint from "./Complaint";

function App() {
  const [shipmentDetails, setShipmentDetails] = useState("");
  const [transitEvents, setTransitEvents] = useState("");

  useEffect(() => {
    requestDetails();
  }, []);

  const requestDetails = async () => {
    const shipment = await axios.get(
      "https://tracking.bosta.co/shipments/track/9442984"
    );
    setShipmentDetails(shipment.data);
    setTransitEvents(shipment.data.TransitEvents);
  };
  return (
    <div className="App">
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

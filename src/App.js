import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ShipmentProgress from "./ShipmentProgress";
import TransitDetails from "./TransitDetails";

function App() {
  const [shipmentDetails, setShipmentDetails] = useState("");
  const [transitEvents, setTransitEvents] = useState("");

  useEffect(() => {
    requestDetails();
  }, []);

  const requestDetails = async () => {
    const shipment = await axios.get(
      "https://tracking.bosta.co/shipments/track/1094442"
    );
    setShipmentDetails(shipment.data);
    setTransitEvents(shipment.data.TransitEvents);
  };
  return (
    <div className="App">
      <div className="container">
        <ShipmentProgress shipment={shipmentDetails} />
        <div className="row mt-4 mb-5">
          <div className="col-9">
            <TransitDetails transitEvents={transitEvents} />
          </div>
          <div className="col-3">
            <h6>عنوان التسليم</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

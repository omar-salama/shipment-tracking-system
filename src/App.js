import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ShipmentProgress from "./ShipmentProgress";

function App() {
  const [shipmentDetails, setShipmentDetails] = useState("");

  useEffect(() => {
    requestDetails();
  }, []);

  const requestDetails = async () => {
    const shipment = await axios.get(
      "https://tracking.bosta.co/shipments/track/1094442"
    );
    setShipmentDetails(shipment.data);
  };
  return (
    <div className="App">
      <div className="container">
        <ShipmentProgress shipment={shipmentDetails} />
      </div>
    </div>
  );
}

export default App;

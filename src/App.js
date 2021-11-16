import "./App.css";
import { useState } from "react";
import Navbar from "./Navbar";
import ShipmentTracking from "./ShipmentTracking";

function App() {
  const [shipmentNumber, setShipmentNumber] = useState("");
  const handleShipmentChange = (shipmentNumber) => {
    setShipmentNumber(shipmentNumber);
  };
  return (
    <div className="App">
      <Navbar onShipmentChange={handleShipmentChange} />
      <ShipmentTracking
        onShipmentChange={handleShipmentChange}
        shipmentNumber={shipmentNumber}
      />
    </div>
  );
}

export default App;

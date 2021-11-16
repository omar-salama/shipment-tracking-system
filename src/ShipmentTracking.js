import { useState, createContext, useEffect } from "react";
import axios from "axios";
import ShipmentProgress from "./ShipmentProgress";
import ShipmentTransitDetails from "./ShipmentTransitDetails";
import ShippingAddress from "./ShippingAddress";
import Complaint from "./Complaint";
import ShipmentInqueryForm from "./ShipmentInqueryForm";
export const ShipmentContext = createContext();

function ShipmentTracking({ shipmentNumber, onShipmentChange }) {
  const [shipmentDetails, setShipmentDetails] = useState("");
  const requestDetails = async (shipmentNumber) => {
    const shipment = await axios.get(
      `https://tracking.bosta.co/shipments/track/${shipmentNumber}`
    );
    setShipmentDetails(shipment.data);
  };
  useEffect(() => {
    if (shipmentNumber) requestDetails(shipmentNumber);
  }, [shipmentNumber]);

  if (!shipmentDetails)
    return (
      <div className="center">
        <ShipmentInqueryForm onShipmentChange={onShipmentChange} />
      </div>
    );
  return (
    <div className="ShipmentTracking container">
      <ShipmentContext.Provider value={shipmentDetails}>
        <ShipmentProgress />
        <div className="row mt-4 mb-5">
          <div className="col-12 col-md-9">
            <ShipmentTransitDetails />
          </div>
          <div className="col-12 col-md-3">
            <ShippingAddress />
            <Complaint />
          </div>
        </div>
      </ShipmentContext.Provider>
    </div>
  );
}

export default ShipmentTracking;

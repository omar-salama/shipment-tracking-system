import { useState, createContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ShipmentProgress from "../components/ShipmentTracking/ShipmentProgress";
import ShipmentTransitDetails from "../components/ShipmentTracking/ShipmentTransitDetails";
import ShippingAddress from "../components/ShipmentTracking/ShippingAddress";
import Complaint from "../components/ShipmentTracking/Complaint";
export const ShipmentContext = createContext();

function ShipmentTracking() {
  const { shipmentNumber } = useParams();
  const [shipmentDetails, setShipmentDetails] = useState(null);

  const requestDetails = async (shipmentNumber) => {
    const shipment = await axios.get(
      `https://tracking.bosta.co/shipments/track/${shipmentNumber}`
    );
    setShipmentDetails(shipment.data);
  };

  useEffect(() => {
    if (shipmentNumber) requestDetails(shipmentNumber);
  }, [shipmentNumber]);

  return (
    shipmentDetails && (
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
    )
  );
}

export default ShipmentTracking;

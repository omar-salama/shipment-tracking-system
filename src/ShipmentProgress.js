import "./ShipmentProgress.css";
import { useContext } from "react";
import { ShipmentContext } from "./ShipmentTracking";
import translateAR from "./translation.json";
import setColorByShipmentState from "./utils/changeStyle";
import Stepper from "./Stepper";

function ShipmentProgress() {
  const shipment = useContext(ShipmentContext);
  return (
    shipment && (
      <div className="ShipmentProgress card mt-5">
        <div className="card-body">
          <div className="details row">
            <div className="col-6 col-md-3">
              <h6>رقم الشحنة {shipment.TrackingNumber}</h6>
              <p style={setColorByShipmentState(shipment.CurrentStatus.state)}>
                {translateAR[shipment.CurrentStatus.state]}
              </p>
            </div>
            <div className="col-6 col-md-3">
              <h6>آخر تحديث</h6>
              <p>
                {new Date(shipment.CurrentStatus.timestamp).toLocaleString(
                  "ar-EG",
                  {
                    weekday: "long",
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  }
                )}
              </p>
            </div>
            <div className="col-6 col-md-3 mt-3 mt-md-0">
              <h6>اسم التاجر</h6>
              <p>AMAZON</p>
            </div>
            <div className="col-6 col-md-3 mt-3 mt-md-0">
              <h6>موعد التسليم خلال</h6>
              <p>
                {new Date(shipment.PromisedDate).toLocaleDateString("ar-EG", {
                  dateStyle: "full",
                }) || "Unknown"}
              </p>
            </div>
          </div>
          <hr />
          <Stepper
            currentShipmentState={shipment.CurrentStatus.state}
            TransitEvents={shipment.TransitEvents}
          />
        </div>
      </div>
    )
  );
}

export default ShipmentProgress;

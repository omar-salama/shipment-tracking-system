import "./ShipmentProgress.css";
import { getDate, getTime } from "./utils/dateHandler";
import mapToArabic from "./utils/mapToArabic";
import setColorByShipmentState from "./utils/changeStyle";
import Stepper from "./Stepper";

function ShipmentProgress({ shipment }) {
  return (
    shipment && (
      <div className="ShipmentProgress card mt-5">
        <div className="card-body">
          <div className="details row">
            <div className="col-6 col-md-3">
              <h6>رقم الشحنة {shipment.TrackingNumber}</h6>
              <p style={setColorByShipmentState(shipment.CurrentStatus.state)}>
                {mapToArabic(shipment.CurrentStatus.state)}
              </p>
            </div>
            <div className="col-6 col-md-3">
              <h6>آخر تحديث</h6>
              <p>
                {getDate(shipment.CurrentStatus.timestamp) +
                  " / " +
                  getTime(shipment.CurrentStatus.timestamp)}
              </p>
            </div>
            <div className="col-6 col-md-3 mt-3 mt-md-0">
              <h6>اسم التاجر</h6>
              <p>AMAZON</p>
            </div>
            <div className="col-6 col-md-3 mt-3 mt-md-0">
              <h6>موعد التسليم خلال</h6>
              <p>{getDate(shipment.PromisedDate) || "Unknown"}</p>
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

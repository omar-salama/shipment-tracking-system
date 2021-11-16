import "./ShipmentTransitDetails.css";
import { useContext } from "react";
import { ShipmentContext } from "./ShipmentTracking";
import translateAR from "./translation.json";
import { getDate, getTime } from "./utils/dateHandler";

function ShipmentTransitDetails() {
  const { TransitEvents } = useContext(ShipmentContext);
  return (
    TransitEvents && (
      <div className="ShipmentTransitDetails">
        <h6>تفاصيل الشحنة</h6>
        <table className="mt-3">
          <thead>
            <tr>
              <th>الفرع</th>
              <th>التاريخ</th>
              <th>الوقت</th>
              <th>تفاصيل</th>
            </tr>
          </thead>
          <tbody>
            {TransitEvents.map((event, index) => (
              <tr key={index}>
                <td>مدينة نصر</td>
                <td>{getDate(event.timestamp)}</td>
                <td>{getTime(event.timestamp)}</td>
                <td>
                  {translateAR[event.state] || event.state}
                  {event.reason && <p>{event.reason}</p>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
}

export default ShipmentTransitDetails;

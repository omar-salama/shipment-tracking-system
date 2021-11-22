import "./ShipmentTransitDetails.css";
import { useContext } from "react";
import { ShipmentContext } from "../../pages/ShipmentTracking";
import translateAR from "../../translation.json";

function ShipmentTransitDetails() {
  const { TransitEvents } = useContext(ShipmentContext);
  return (
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
          {TransitEvents.map((event) => (
            <tr key={event.timestamp}>
              <td>{translateAR[event.hub] || "—"}</td>
              <td>{new Date(event.timestamp).toLocaleDateString("en-GB")}</td>
              <td id="date-fix">
                {new Date(event.timestamp).toLocaleTimeString("en-US", {
                  timeStyle: "short",
                })}
              </td>
              <td>
                {translateAR[event.state] || event.state}
                {event.reason && <p>{event.reason}</p>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShipmentTransitDetails;

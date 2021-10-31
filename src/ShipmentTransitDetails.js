import "./ShipmentTransitDetails.css";
import { getDate, getTime } from "./utils/dateHandler";
import mapToArabic from "./utils/mapToArabic";

function ShipmentTransitDetails({ transitEvents }) {
  return (
    transitEvents && (
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
            {transitEvents.map((event, index) => (
              <tr key={index}>
                <td>مدينة نصر</td>
                <td>{getDate(event.timestamp)}</td>
                <td>{getTime(event.timestamp)}</td>
                <td>
                  {mapToArabic(event.state)}
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

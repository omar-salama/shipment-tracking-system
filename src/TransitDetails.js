import { getDate, getTime } from "./utils/dateHandler";

function TransitDetails({ transitEvents }) {
  return (
    transitEvents && (
      <div className="TransitDetails ">
        <h6>تفاصيل الشحنة</h6>
        <table className="mt-3">
          <tr>
            <th>الفرع</th>
            <th>التاريخ</th>
            <th>الوقت</th>
            <th>تفاصيل</th>
          </tr>
          {transitEvents.map((event) => (
            <tr>
              <td>مدينة نصر</td>
              <td>{getDate(event.timestamp)}</td>
              <td>{getTime(event.timestamp)}</td>
              <td>{event.state}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  );
}

export default TransitDetails;

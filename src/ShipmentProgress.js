function ShipmentProgress({ shipment }) {
  const getDate = (fullDate) => {
    const date = fullDate.split("T");
    return date[0] || "Unknown";
  };

  const getLastUpdateDate = (fullDate) => {
    const date = fullDate.split("T");
    return `${date[0]} / ${date[1].slice(0, 5)}`;
  };

  return (
    shipment && (
      <div className="ShipmentProgress card mt-5">
        <div className="card-body">
          <div className="details row">
            <div className="col-3">
              <h6>رقم الشحنة {shipment.TrackingNumber}</h6>
              <p>{shipment.CurrentStatus.state}</p>
            </div>
            <div className="col-3">
              <h6>آخر تحديث</h6>
              <p>{getLastUpdateDate(shipment.CurrentStatus.timestamp)}</p>
            </div>
            <div className="col-3">
              <h6>اسم التاجر</h6>
              <p>AMAZON</p>
            </div>
            <div className="col-3">
              <h6>موعد التسليم خلال</h6>
              <p>{getDate(shipment.PromisedDate)}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ShipmentProgress;

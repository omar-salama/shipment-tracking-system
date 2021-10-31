import ShipmentProgress from "./ShipmentProgress";
import ShipmentTransitDetails from "./ShipmentTransitDetails";
import ShippingAddress from "./ShippingAddress";
import Complaint from "./Complaint";
import ShipmentInqueryForm from "./ShipmentInqueryForm";

function ShipmentTracking({ shipmentDetails, AppCallBack }) {
  if (!shipmentDetails)
    return (
      <div className="center">
        <ShipmentInqueryForm parentCallBack={AppCallBack} />
      </div>
    );
  return (
    <div className="ShipmentTracking container">
      <ShipmentProgress shipment={shipmentDetails} />
      <div className="row mt-4 mb-5">
        <div className="col-12 col-md-9">
          <ShipmentTransitDetails
            transitEvents={shipmentDetails.TransitEvents}
          />
        </div>
        <div className="col-12 col-md-3">
          <ShippingAddress />
          <Complaint />
        </div>
      </div>
    </div>
  );
}

export default ShipmentTracking;

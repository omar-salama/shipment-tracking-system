import "./Stepper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import setColorByShipmentState from "./utils/changeStyle";

function Stepper({ currentShipmentState, TransitEvents }) {
  const steps = {
    step1: {
      label: "تم إنشاء الشحنة",
      icon: <FontAwesomeIcon icon={faTicketAlt} />,
    },
    step2: {
      label: "تم وصول الشحنة للمخازن",
      icon: <FontAwesomeIcon icon={faBoxOpen} />,
    },
    step3: {
      label: "الشحنة خرجت للتسليم",
      icon: <FontAwesomeIcon icon={faTruck} flip="horizontal" />,
    },
    step4: { label: "تم التسليم", icon: <FontAwesomeIcon icon={faSave} /> },
  };

  const currentStepNumber = (state) => {
    switch (state) {
      case "TICKET_CREATED":
        return 1;
      case "PACKAGE_RECEIVED":
        return 2;
      case "OUT_FOR_DELIVERY":
      case "DELIVERY_FAILED":
      case "WAITING_FOR_CUSTOMER_ACTION":
      case "CANCELLED":
        return 3;
      case "DELIVERED_TO_SENDER":
      case "DELIVERED":
        return 4;
      default:
        return 0;
    }
  };

  // adds class names according to the shipment state
  const isComplete = (stepNumber) => {
    if (currentStepNumber(currentShipmentState) > stepNumber) {
      // add special class to the last shipment state
      if (stepNumber + 1 === currentStepNumber(currentShipmentState)) {
        return "completed current-state";
      }
      return "completed";
    }
    return "";
  };

  const notDelivered = () => {
    return currentStepNumber(currentShipmentState) !== 4;
  };

  function renderIcons(index, step) {
    if (!isComplete(index)) return step.icon;
    // render last shipment state icon instead of the checkmark ( √ ) icon
    if (isComplete(index).includes("current-state") && notDelivered())
      return step.icon;
    return <FontAwesomeIcon icon={faCheck} />;
  }

  const changeStepperColor = () => {
    switch (currentShipmentState) {
      case "DELIVERED":
        return "delivered";
      case "CANCELLED":
      case "DELIVERY_FAILED":
      case "DELIVERED_TO_SENDER":
        return "cancelled";
      default:
        return "";
    }
  };

  // get shipment delay/cancellation reason
  if (notDelivered())
    for (let TE of TransitEvents)
      if (TE.reason) {
        var reason = TE.reason;
      }

  return (
    <div className="Stepper">
      {Object.values(steps).map((step, index) => (
        <div key={index} className={"stepper-item " + isComplete(index)}>
          <div className={"progress-bar " + changeStepperColor()}></div>
          <div className={"step-counter " + changeStepperColor()}>
            {renderIcons(index, step)}
          </div>
          <div className="step-name">
            {step.label}
            {reason && index === 2 && (
              <p
                className="step-reason"
                style={setColorByShipmentState(currentShipmentState)}
              >
                {reason}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stepper;

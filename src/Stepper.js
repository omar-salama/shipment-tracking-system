import "./Stepper.css";
import setColorByShipmentState from "./utils/changeStyle";

function Stepper({ currentShipmentState, TransitEvents }) {
  const steps = [
    "تم إنشاء الشحنة",
    "تم وصول الشحنة للمخازن",
    "الشحنة خرجت للتسليم",
    "تم التسليم",
  ];
  const currentStepNumber = (state) => {
    switch (state) {
      case "TICKET_CREATED":
        return 1;
      case "PACKAGE_RECEIVED":
        return 2;
      case "OUT_FOR_DELIVERY":
        return 3;
      case "DELIVERED_TO_SENDER":
      case "DELIVERED":
        return 4;
      default:
        return 0;
    }
  };
  const isComplete = (stepNumber) => {
    return currentStepNumber(currentShipmentState) > stepNumber
      ? "completed"
      : "";
  };

  const changeStepperColor = () => {
    if (currentStepNumber(currentShipmentState) === 4) return "delivered";
    // TODO: set color to red if the shipment was cancelled (not provided in the assestment's test cases)
    return "";
  };

  for (let TE of TransitEvents)
    if (TE.reason && currentShipmentState === "WAITING_FOR_CUSTOMER_ACTION") {
      var reason = TE.reason;
    }

  return (
    <div className="Stepper">
      {steps.map((step, index) => (
        <div key={index} className={"stepper-item " + isComplete(index)}>
          <div className={"progress-bar " + changeStepperColor()}></div>
          <div className={"step-counter " + changeStepperColor()}>
            {index + 1}
          </div>
          <div className="step-name">
            {step}
            <p style={setColorByShipmentState(currentShipmentState)}>
              {index === 2 && reason}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stepper;

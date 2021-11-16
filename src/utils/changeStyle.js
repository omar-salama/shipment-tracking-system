function getColorByShipmentState(state) {
  switch (state) {
    case "DELIVERED":
      return "#1ac45e"; // Green
    case "DELIVERED_TO_SENDER":
    case "CANCELLED":
    case "DELIVERY_FAILED":
      return "#f00";
    default:
      return "#f6ad0a"; // Yellow
  }
}

export default function setColorByShipmentState(state) {
  return {
    color: getColorByShipmentState(state),
  };
}

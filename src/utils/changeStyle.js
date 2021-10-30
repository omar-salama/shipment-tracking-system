function getColorByShipmentState(state) {
  switch (state) {
    case "DELIVERED":
    case "DELIVERED_TO_SENDER":
      return "green";
    default:
      return "yellow";
  }
}

export default function setColorByShipmentState(state) {
  return {
    color: getColorByShipmentState(state),
  };
}

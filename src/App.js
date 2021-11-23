import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShipmentTracking from "./pages/ShipmentTracking";
import ShipmentInquery from "./pages/ShipmentInquery";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ShipmentInquery />} />
            <Route
              path="/track-shipment/:shipmentNumber"
              element={<ShipmentTracking />}
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

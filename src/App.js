import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShipmentInqueryForm from "./pages/ShipmentInqueryForm";
import ShipmentTracking from "./pages/ShipmentTracking";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/track-shipment" element={<ShipmentInqueryForm />} />
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

import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import PageRouter from './Components/Pages/PageRouter';
import Resources from './Components/Pages/Features/Home/Resources/Resources';
import Feedback from './Components/Pages/Features/Home/Feedback/Feedback';
import UserProfile from './Components/Pages/Features/Home/UserProfile/UserProfile';
import OrdersPage from './Components/Pages/Features/OrderManagement/OrdersPage/OrdersPage';
import CMSticky1 from './Components/Pages/Features/OrderManagement/CMSticky1/CMSticky1';
import Warehouse from './Components/Pages/Features/Inventory/Warehouse/Warehouse';
import InternalInventory from './Components/Pages/Features/Inventory/InternalInventory/InternalInventory';
import ExternalInventory from './Components/Pages/Features/Inventory/ExternalInventory/ExternalInventory';
import Scheduling from './Components/Pages/Features/Manufacturing/Scheduling/Scheduling';
import HealthAnalytics from './Components/Pages/Features/Manufacturing/HealthAnalytics/HealthAnalytics';
import AutoTherm from './Components/Pages/Features/Manufacturing/Terminals/AutoTherm/AutoTherm';
import Laser from './Components/Pages/Features/Manufacturing/Terminals/Laser/Laser';
import Mill from './Components/Pages/Features/Manufacturing/Terminals/Mill/Mill';
import Tumble from './Components/Pages/Features/Manufacturing/Terminals/Tumble/Tumble';
import Review from './Components/Pages/Features/Manufacturing/Terminals/Review/Review';
import PackShip from './Components/Pages/Features/Manufacturing/Terminals/PackShip/PackShip';
import Atlassian from './Components/Pages/Features/Administration/Atlassian/Atlassian';
import Analytics from './Components/Pages/Features/Administration/Analytics/Analytics';
import KPI_OKR from './Components/Pages/Features/Administration/KPI_OKR/KPI_OKR';
import Current from './Components/Pages/Features/Financial/Current/Current';
import Historical from './Components/Pages/Features/Financial/Historical/Historical';
import Projections from './Components/Pages/Features/Financial/Projections/Projections';
import Operations from './Components/Pages/Features/Financial/Operations/Operations';
import StandardOperatingProcedures from './Components/Pages/Features/Quality/StandardOperatingProcedures/StandardOperatingProcedures';
import WorkInstructions from './Components/Pages/Features/Quality/WorkInstructions/WorkInstructions';
import Trainings from './Components/Pages/Features/Quality/Trainings/Trainings';
import Records from './Components/Pages/Features/HumanResources/Records/Records';
import Reviews from './Components/Pages/Features/HumanResources/Reviews/Reviews';
import Documents from './Components/Pages/Features/HumanResources/Documents/Documents';
import OrganizationChart from './Components/Pages/Features/HumanResources/OrganizationChart/OrganizationChart';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<PageRouter />}>
            <Route path="/home/resources" element={<Resources />} />
            <Route path="/home/feedback" element={<Feedback />} />
            <Route path="/home/user-profile" element={<UserProfile />} />
            <Route path="/order-management/orders" element={<OrdersPage />} />
            <Route path="/order-management/cm-sticky-1" element={<CMSticky1 />} />
            <Route path="/order-management/cm-sticky-2" element={<CMSticky1 />} />
            <Route path="/order-management/cm-sticky-3" element={<CMSticky1 />} />
            <Route path="/inventory/warehouse" element={<Warehouse />} />
            <Route path="/inventory/internal-inventory" element={<InternalInventory />} />
            <Route path="/inventory/external-inventory" element={<ExternalInventory />} />
            <Route path="/manufacturing/scheduling" element={<Scheduling />} />
            <Route path="/manufacturing/health-analytics" element={<HealthAnalytics />} />
            <Route path="/manufacturing/terminals/auto-therm" element={<AutoTherm />} />
            <Route path="/manufacturing/terminals/laser" element={<Laser />} />
            <Route path="/manufacturing/terminals/mill" element={<Mill />} />
            <Route path="/manufacturing/terminals/tumble" element={<Tumble />} />
            <Route path="/manufacturing/terminals/review" element={<Review />} />
            <Route path="/manufacturing/terminals/pack-ship" element={<PackShip />} />
            <Route path="/administration/atlassian" element={<Atlassian />} />
            <Route path="/administration/analytics" element={<Analytics />} />
            <Route path="/administration/kpi-okr" element={<KPI_OKR />} />
            <Route path="/financial/current" element={<Current />} />
            <Route path="/financial/historical" element={<Historical />} />
            <Route path="/financial/projections" element={<Projections />} />
            <Route path="/financial/operations" element={<Operations />} />
            <Route path="/quality/standard-operating-procedures" element={<StandardOperatingProcedures />} />
            <Route path="/quality/work-instructions" element={<WorkInstructions />} />
            <Route path="/quality/trainings" element={<Trainings />} />
            <Route path="/human-resources/records" element={<Records />} />
            <Route path="/human-resources/reviews" element={<Reviews />} />
            <Route path="/human-resources/documents" element={<Documents />} />
            <Route path="/human-resources/organization-chart" element={<OrganizationChart />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

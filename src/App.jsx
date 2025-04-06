import "./App.css";
import MainHeader from "./components/MainHeader.jsx";
import Menu1 from "./components/Menu1.jsx";
import PageHead from "./components/PageHead.jsx";
import ServiceOrderTable from "./components/ServiceOrderTable.jsx";
import ProvisioningCard from './components/ProvisioningCard';
import NewlyDeployedSitesCard from './components/NewlyDeployedSitesCard';
import NewMyConnectUsersCard from './components/NewMyConnectUsersCard';
import ServiceExpiringCard from './components/ServiceExpiringCard';
import ServiceExpiredCard from './components/ServiceExpiredCard';

function App() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen">
        <MainHeader />
        <div className="flex flex-1 overflow-hidden">
          <aside className="bg-white  w-16 md:w-56 h-full overflow-y-auto flex flex-col border-r-1">
            <Menu1 />
          </aside>
          <main className="flex-1 bg-gray-200 overflow-y-auto p-6">
            <PageHead />
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-9 gap-3">
              <ProvisioningCard />
              <NewlyDeployedSitesCard />
              { /*<NewMyConnectUsersCard /> */ }
              <ServiceExpiringCard />
              <ServiceExpiredCard />
            </div>
            <div className="mt-3">
              <ServiceOrderTable />
            </div>
          </main>
        </div >
      </div >
    </>
  );
}

export default App;

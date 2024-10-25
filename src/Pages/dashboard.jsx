import Card from "../components/Elements/Card/index";
import MainLayout from "../components/Layout/MainLayout";


const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      <div className="mb-4 sm:flex sm:gap-6">
    <div className="mb-4 sm:w-1/3">
      <Card/>
    </div>
    <div className="mb-4 sm:w-1/3">
      <Card/>
    </div>
    <div className="mb-4 sm:w-1/3">
      <Card/>
    </div>
  </div>
  {/* top content end*/}
  {/* bottom content start*/}
  <div className="sm:flex sm:gap-6">
    <div className="mb-4 sm:w-1/3">
      <Card/>
    </div>
    <div className="    sm:w-2/3">
      <div className="mb-4">
      <Card/>
      </div>
      <div className="mb-4">
      <Card/>
      </div>
    </div>
  </div>
    </MainLayout>
  );
};

export default DashboardPage;
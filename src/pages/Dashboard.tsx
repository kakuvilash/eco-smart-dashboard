
import AppLayout from "@/components/layout/AppLayout";
import DashboardMetrics from "@/components/dashboard/DashboardMetrics";
import WasteBinStatus from "@/components/dashboard/WasteBinStatus";
import WasteMap from "@/components/maps/WasteMap";
import CollectionSchedule from "@/components/schedule/CollectionSchedule";
import WasteAnalytics from "@/components/analytics/WasteAnalytics";

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <DashboardMetrics />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WasteMap />
          <div className="space-y-6">
            <WasteBinStatus compact />
            <CollectionSchedule compact />
          </div>
        </div>
        
        <WasteAnalytics />
      </div>
    </AppLayout>
  );
};

export default Dashboard;

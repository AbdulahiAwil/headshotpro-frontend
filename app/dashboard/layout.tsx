
import { DashboardLayout } from "@/components/dashboard";
import { UserProvider } from "@/lib/context/user-context";
import { getCurrentUserServer } from "@/lib/util";
import { redirect } from "next/navigation";

const DashboardRootLayout = async({ children }: { children: React.ReactNode }) => {

    const user = await getCurrentUserServer();

    if(!user){
        redirect('/auth/login');
    }

   
  return (
    <UserProvider user={user}>
      {/* Dashboard Layout */}
      <DashboardLayout>{children}</DashboardLayout>
    </UserProvider>
  );
}

export default DashboardRootLayout;


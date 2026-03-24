import { UserRole } from "@/lib/types";
import { getCurrentUserServer } from "@/lib/util";
import { redirect } from "next/navigation";


const AdminLayout = async({ children }: { children: React.ReactNode }) => {

    const user = await getCurrentUserServer();

    if(!user || user.role !== UserRole.ADMIN){
        redirect('/dashboard/user');
    }

    return children
}

export default AdminLayout;
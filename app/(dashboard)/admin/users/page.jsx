import { Suspense } from "react";
import getAllUsers from "../_actions/userAction";
import UserTable from '../_components/UserTable'
import {Skeleton} from '../../../../components/ui/skeleton'



async function UserTableWrapper() {
  const allUser = await getAllUsers();
  const users = allUser?.data?.data ?? [];
  return <UserTable users={users} />;
}


const UserPage = async () => {
 

  return (
    <div className="p-6 space-y-4">
      <Suspense fallback={<Skeleton className="h-64 w-full" />}>
      <UserTableWrapper />
      </Suspense>
    </div>
  );
};

export default UserPage;
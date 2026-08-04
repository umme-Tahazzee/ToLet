import getAllUsers from "../_actions/userAction";
import UserTable from '../_components/UserTable'

const UserPage = async () => {
  const allUser = await getAllUsers();
  const users = allUser?.data?.data ?? [];

  return (
    <div className="p-6 space-y-4">
      
      <UserTable users={users} />
    </div>
  );
};

export default UserPage;
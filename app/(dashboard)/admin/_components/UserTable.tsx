"use client";


import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type TUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  phone: string | null;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

const roleBadgeVariant = (role: string) => {
  switch (role) {
    case "ADMIN":
      return "default";
    case "TENANT":
      return "secondary";
    case "LANDLORD":
      return "outline";
    default:
      return "secondary";
  }
};

const statusBadgeClass = (status: string) => {
  switch (status) {
    case "ACTIVE":
      return "bg-green-100 text-green-700 hover:bg-green-100";
    case "INACTIVE":
      return "bg-red-100 text-red-700 hover:bg-red-100";
    case "BLOCKED":
      return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const UserTable = ({ users }: { users: TUser[] }) => {
  return (
    <div className="rounded-md border shadow-sm">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="w-[60px]">SL</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Joined</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                No users found.
              </TableCell>
            </TableRow>
          ) : (
            users.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell className="text-muted-foreground">{index + 1}</TableCell>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge variant={roleBadgeVariant(user.role)}>{user.role}</Badge>
                </TableCell>
                <TableCell>{user.phone ?? "—"}</TableCell>
                <TableCell>
                  <Badge className={statusBadgeClass(user.status)}>{user.status}</Badge>
                </TableCell>
                <TableCell>
                  {new Date(user.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
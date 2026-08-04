"use client"

import { useState, useTransition } from "react";
import { MoreHorizontal, Ban, CheckCircle } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { updateUserStatus } from "../_actions/userAction";


type Props = {
  userId: string;
  userName: string;
  currentStatus: string;
};

const UserStatusAction = ({ userId, userName, currentStatus }: Props) => {
    // console.log(userId, "userId");
    
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const isBanned = currentStatus === "BLOCKED";
  const nextStatus = isBanned ? "ACTIVE" : "BLOCKED";

  const handleConfirm = () => {
    startTransition(async () => {
      const result = await updateUserStatus(userId, nextStatus);

      if (result?.success === false) {
        toast.error(result.message || "Failed to update status");
      } else {
        toast.success(isBanned ? "User unbanned" : "User banned");
        setConfirmOpen(false);
      }
    });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-md p-1.5 hover:bg-gray-100">
          <MoreHorizontal size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            className={isBanned ? "text-green-600" : "text-red-600"}
            onClick={() => setConfirmOpen(true)}
          >
            {isBanned ? (
              <>
                <CheckCircle size={14} className="mr-2" /> Unban user
              </>
            ) : (
              <>
                <Ban size={14} className="mr-2" /> Ban user
              </>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {isBanned ? "Unban this user?" : "Ban this user?"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {isBanned
                ? `${userName} will regain access to the platform.`
                : `${userName} will lose access to the platform immediately.`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirm}
              disabled={isPending}
              className={isBanned ? "" : "bg-red-600 hover:bg-red-700"}
            >
              {isPending ? "Processing..." : isBanned ? "Unban" : "Ban"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default UserStatusAction;
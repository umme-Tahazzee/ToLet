

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  CalendarDays,
  ShieldCheck,
  User as UserIcon,
  Edit,
  Copy,
  LogOut,
} from "lucide-react";
import { redirect } from "next/navigation";
import { IUser } from "@/types";
import { getMe } from "@/services/getMe";


const ProfilePage = async () => {
  const user: IUser = await getMe();

  if (!user.success) {
    redirect("/login");
  }

  const { profile } = user.data;


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background">
      {/* Header Background */}
      <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        {/* Profile Card */}
        <Card className="border-0 overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 h-24"></div>

          <CardContent className="pt-0">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 -mt-12 mb-8">
              {/* Avatar and Basic Info */}
              <div className="flex gap-4 items-end">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary to-accent p-1 shadow-lg flex-shrink-0">
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <UserIcon className="w-12 h-12 text-primary" />
                  </div>
                </div>

                <div className="pb-2">
                  <h1 className="text-3xl font-bold tracking-tight text-foreground">
                    {profile.name}
                  </h1>
                  <p className="text-muted-foreground flex items-center gap-2 mt-1">
                    <Mail className="w-4 h-4" />
                    {profile.email}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 flex-wrap md:flex-nowrap">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-border hover:bg-secondary"
                >
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </Button>
              </div>
            </div>

            {/* Status Badges */}
            <div className="flex flex-wrap gap-3 mb-8 pb-8 border-b border-border">
              <div>
                <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide">
                  Role
                </p>
                <Badge className="bg-primary/15 text-primary hover:bg-primary/25 font-medium">
                  {profile.role}
                </Badge>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide">
                  Status
                </p>
                <Badge
                  variant={profile.status === "ACTIVE" ? "default" : "outline"}
                  className={
                    profile.status === "ACTIVE"
                      ? "bg-emerald-500 hover:bg-emerald-600"
                      : ""
                  }
                >
                  {profile.status}
                </Badge>
              </div>
            </div>

            {/* Information Grid */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                Account Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      Phone Number
                    </label>
                    {profile.phone && (
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Copy className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground" />
                      </button>
                    )}
                  </div>
                  <p className="text-foreground font-medium">
                    {profile.phone || (
                      <span className="text-muted-foreground">Not added</span>
                    )}
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      User ID
                    </label>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Copy className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground" />
                    </button>
                  </div>
                  <p className="text-foreground font-mono text-sm">
                    {profile.id.slice(0, 12)}...
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      Member Since
                    </label>
                  </div>
                  <p className="text-foreground font-medium">
                    {new Date(profile.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      Last Updated
                    </label>
                  </div>
                  <p className="text-foreground font-medium">
                    {new Date(profile.updatedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Security</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Your account is secure and protected with modern encryption
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <CalendarDays className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground">Activity</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                View your recent account activity and login history
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-primary/70" />
                <h3 className="font-semibold text-foreground">Preferences</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Manage your notification and email preferences
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Spacing */}
        <div className="py-8"></div>
      </div>
    </div>
  );
};

export default ProfilePage;

import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type StatCardProps = {
  label: string;
  value: string | number;
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  trend?: string;
};

const StatCard = ({
  label,
  value,
  icon: Icon,
  iconColor = "text-primary",
  iconBg = "bg-primary/10",
  trend,
}: StatCardProps) => {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="flex items-center justify-between p-5">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
          {trend && <p className="mt-1 text-xs text-green-600">{trend}</p>}
        </div>
        <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${iconBg} ${iconColor}`}>
          <Icon size={20} />
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
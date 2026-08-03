'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Building2,
  DollarSign,
  Users,
  AlertTriangle,
  ChevronRight,
  Plus,
  TrendingUp,
} from 'lucide-react'

export default function LandlordDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Portfolio Overview
          </h1>
          <p className="text-slate-600">
            Manage your properties and monitor tenant activity
          </p>
        </div>

        {/* Revenue Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">
                    Total Revenue
                  </p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    $12,450
                  </p>
                  <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +12% this month
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">
                    Properties
                  </p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    5
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    3 occupied, 2 vacant
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">
                    Active Tenants
                  </p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    8
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    All payments on time
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">
                    Occupancy Rate
                  </p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    85%
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Industry average: 75%
                  </p>
                </div>
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Properties List */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-0 shadow-sm">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">
                  Your Properties
                </h2>
                <Button className="h-8 px-3 text-xs bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-3 h-3 mr-1" />
                  Add Property
                </Button>
              </div>
              <div className="divide-y divide-slate-100">
                {/* Property Item 1 */}
                <div className="p-6 hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Downtown Residential Complex
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">
                        123 Main Street, Downtown • 4 units
                      </p>
                      <div className="flex gap-4 text-sm">
                        <span className="text-slate-600">
                          <span className="font-medium text-slate-900">$4,500</span>/month
                        </span>
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
                          Fully Occupied
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 mt-1" />
                  </div>
                </div>

                {/* Property Item 2 */}
                <div className="p-6 hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Suburban Modern Townhouse
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">
                        456 Park Avenue, Suburbs • 3 units
                      </p>
                      <div className="flex gap-4 text-sm">
                        <span className="text-slate-600">
                          <span className="font-medium text-slate-900">$3,200</span>/month
                        </span>
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded">
                          2 Occupied, 1 Vacant
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 mt-1" />
                  </div>
                </div>

                {/* Property Item 3 */}
                <div className="p-6 hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Beachfront Cottage
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">
                        789 Ocean Drive, Beachfront • 2 units
                      </p>
                      <div className="flex gap-4 text-sm">
                        <span className="text-slate-600">
                          <span className="font-medium text-slate-900">$2,800</span>/month
                        </span>
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
                          Fully Occupied
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 mt-1" />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Actions & Alerts */}
          <div>
            <Card className="bg-white border-0 shadow-sm mb-6">
              <div className="p-6 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-900">
                  Quick Actions
                </h2>
              </div>
              <div className="p-6 space-y-3">
                <Button className="w-full justify-start gap-2 bg-blue-50 text-blue-700 hover:bg-blue-100">
                  <Plus className="w-4 h-4" />
                  Add New Property
                </Button>
                <Button className="w-full justify-start gap-2 bg-slate-50 text-slate-700 hover:bg-slate-100">
                  <Users className="w-4 h-4" />
                  Manage Tenants
                </Button>
                <Button className="w-full justify-start gap-2 bg-slate-50 text-slate-700 hover:bg-slate-100">
                  <DollarSign className="w-4 h-4" />
                  View Reports
                </Button>
              </div>
            </Card>

            {/* Alerts */}
            <Card className="bg-red-50 border border-red-200 shadow-sm">
              <div className="p-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-1">
                      Maintenance Needed
                    </h3>
                    <p className="text-sm text-red-700 mb-3">
                      Roof inspection overdue for Park Avenue property
                    </p>
                    <Button className="text-xs h-8 bg-red-600 hover:bg-red-700">
                      Schedule
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Lease Renewals */}
        <div className="mt-8">
          <Card className="bg-white border-0 shadow-sm">
            <div className="p-6 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-900">
                Upcoming Lease Renewals
              </h2>
            </div>
            <div className="divide-y divide-slate-100">
              <div className="p-6 flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900">
                    John Smith - Downtown Complex, Unit A
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    Lease expires in 45 days
                  </p>
                </div>
                <Button className="text-xs h-8 bg-blue-50 text-blue-700 hover:bg-blue-100">
                  Renew
                </Button>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900">
                    Sarah Johnson - Park Avenue, Unit C
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    Lease expires in 62 days
                  </p>
                </div>
                <Button className="text-xs h-8 bg-blue-50 text-blue-700 hover:bg-blue-100">
                  Renew
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

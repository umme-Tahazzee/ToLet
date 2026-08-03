'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  BarChart3,
  Users,
  Building2,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Settings,
  CheckCircle,
  XCircle,
} from 'lucide-react'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Platform Analytics
          </h1>
          <p className="text-slate-600">
            Monitor system health and platform activity
          </p>
        </div>

        {/* System Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">
                    Total Users
                  </p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    1,284
                  </p>
                  <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +8% this week
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">
                    Active Properties
                  </p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    342
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Across 45 landlords
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">
                    Monthly Revenue
                  </p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    $42.5K
                  </p>
                  <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +15% vs last month
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">
                    Active Leases
                  </p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    287
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    98.6% payment rate
                  </p>
                </div>
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">
                    Support Tickets
                  </p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    12
                  </p>
                  <p className="text-xs text-amber-600 mt-2 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    4 urgent
                  </p>
                </div>
                <div className="bg-amber-100 p-3 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Registrations */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-0 shadow-sm">
              <div className="p-6 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-900">
                  Recent Registrations
                </h2>
              </div>
              <div className="divide-y divide-slate-100">
                <div className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">
                        Michael Chen
                      </p>
                      <p className="text-sm text-slate-600 mt-1">
                        Landlord • 3 properties listed
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">2 hours ago</p>
                      <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">
                        Emma Rodriguez
                      </p>
                      <p className="text-sm text-slate-600 mt-1">
                        Tenant • Looking for 2-bedroom
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">5 hours ago</p>
                      <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">
                        James Thompson
                      </p>
                      <p className="text-sm text-slate-600 mt-1">
                        Landlord • Pending verification
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">1 day ago</p>
                      <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded">
                        Pending
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">
                        Lisa Park
                      </p>
                      <p className="text-sm text-slate-600 mt-1">
                        Tenant • Lease agreement signed
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500">2 days ago</p>
                      <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Admin Controls */}
          <div>
            <Card className="bg-white border-0 shadow-sm mb-6">
              <div className="p-6 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-900">
                  Administration
                </h2>
              </div>
              <div className="p-6 space-y-3">
                <Button className="w-full justify-start gap-2 bg-slate-50 text-slate-700 hover:bg-slate-100">
                  <Users className="w-4 h-4" />
                  Manage Users
                </Button>
                <Button className="w-full justify-start gap-2 bg-slate-50 text-slate-700 hover:bg-slate-100">
                  <Building2 className="w-4 h-4" />
                  Review Properties
                </Button>
                <Button className="w-full justify-start gap-2 bg-slate-50 text-slate-700 hover:bg-slate-100">
                  <AlertCircle className="w-4 h-4" />
                  Support Tickets
                </Button>
                <Button className="w-full justify-start gap-2 bg-slate-50 text-slate-700 hover:bg-slate-100">
                  <Settings className="w-4 h-4" />
                  System Settings
                </Button>
              </div>
            </Card>

            {/* System Health */}
            <Card className="bg-white border-0 shadow-sm">
              <div className="p-6 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-900">
                  System Health
                </h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">
                    Server Status
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-xs text-green-700">Operational</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">
                    Database
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-xs text-green-700">Healthy</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">
                    API Response
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-xs text-green-700">{'<150ms'}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">
                    Uptime
                  </span>
                  <span className="text-xs font-semibold text-slate-900">
                    99.98%
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Disputed Transactions */}
        <div className="mt-8">
          <Card className="bg-white border-0 shadow-sm">
            <div className="p-6 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-900">
                Flagged Issues & Disputes
              </h2>
            </div>
            <div className="divide-y divide-slate-100">
              <div className="p-6 flex items-start justify-between">
                <div className="flex gap-4 flex-1">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-900">
                      Payment Dispute - Downtown Complex Unit A
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      Tenant disputes unauthorized charge. Requires immediate review.
                    </p>
                  </div>
                </div>
                <Button className="text-xs h-8 bg-red-50 text-red-700 hover:bg-red-100">
                  Review
                </Button>
              </div>

              <div className="p-6 flex items-start justify-between">
                <div className="flex gap-4 flex-1">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-900">
                      Suspicious Account Activity
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      Multiple login attempts from different locations detected for user account.
                    </p>
                  </div>
                </div>
                <Button className="text-xs h-8 bg-amber-50 text-amber-700 hover:bg-amber-100">
                  Investigate
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

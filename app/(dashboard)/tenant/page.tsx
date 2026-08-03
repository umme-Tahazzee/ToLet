'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Home,
  FileText,
  MessageSquare,
  AlertCircle,
  ChevronRight,
  Plus,
  Clock,
} from 'lucide-react'

export default function TenantDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Welcome back!
          </h1>
          <p className="text-slate-600">
            Manage your rental properties and communications
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">
                    Active Rentals
                  </p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    2
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">
                    Pending Requests
                  </p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    1
                  </p>
                </div>
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium">
                    Unread Messages
                  </p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    3
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Rentals */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-0 shadow-sm">
              <div className="p-6 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-900">
                  Your Rentals
                </h2>
              </div>
              <div className="divide-y divide-slate-100">
                {/* Rental Item 1 */}
                <div className="p-6 hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Cozy Studio Apartment
                      </h3>
                      <p className="text-sm text-slate-600 mb-2">
                        456 Oak Street, Downtown
                      </p>
                      <div className="flex gap-3 mt-3">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
                          Active
                        </span>
                        <span className="text-xs text-slate-500">
                          Since Jan 15, 2024
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                </div>

                {/* Rental Item 2 */}
                <div className="p-6 hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Modern 2-Bedroom
                      </h3>
                      <p className="text-sm text-slate-600 mb-2">
                        789 Maple Avenue, Midtown
                      </p>
                      <div className="flex gap-3 mt-3">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
                          Active
                        </span>
                        <span className="text-xs text-slate-500">
                          Since Mar 10, 2024
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
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
                  Browse Properties
                </Button>
                <Button className="w-full justify-start gap-2 bg-slate-50 text-slate-700 hover:bg-slate-100">
                  <FileText className="w-4 h-4" />
                  View Contracts
                </Button>
                <Button className="w-full justify-start gap-2 bg-slate-50 text-slate-700 hover:bg-slate-100">
                  <MessageSquare className="w-4 h-4" />
                  Send Message
                </Button>
              </div>
            </Card>

            {/* Alerts */}
            <Card className="bg-amber-50 border border-amber-200 shadow-sm">
              <div className="p-6">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">
                      Maintenance Request
                    </h3>
                    <p className="text-sm text-amber-700 mb-3">
                      Landlord pending approval for bathroom repairs
                    </p>
                    <Button className="text-xs h-8 bg-amber-600 hover:bg-amber-700">
                      Review
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <Card className="bg-white border-0 shadow-sm">
            <div className="p-6 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-900">
                Recent Activity
              </h2>
            </div>
            <div className="divide-y divide-slate-100">
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div>
                    <p className="font-medium text-slate-900">
                      Rent payment received
                    </p>
                    <p className="text-sm text-slate-600">
                      $1,500 for Studio Apartment
                    </p>
                  </div>
                </div>
                <span className="text-xs text-slate-500">2 hours ago</span>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <div>
                    <p className="font-medium text-slate-900">
                      New message from landlord
                    </p>
                    <p className="text-sm text-slate-600">
                      Regarding lease renewal
                    </p>
                  </div>
                </div>
                <span className="text-xs text-slate-500">5 hours ago</span>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <div>
                    <p className="font-medium text-slate-900">
                      Lease agreement updated
                    </p>
                    <p className="text-sm text-slate-600">
                      2-Bedroom apartment lease modified
                    </p>
                  </div>
                </div>
                <span className="text-xs text-slate-500">1 day ago</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

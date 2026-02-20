"use client";

import {
  Users,
  Calendar,
  DollarSign,
  Activity,
  ArrowUpRight,
  ChevronRight,
  MoreVertical,
  Clock,
  User
} from "lucide-react";
import { StatCard } from "@/components/StatCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { cn } from "@/lib/utils";

const chartData = [
  { name: 'Mon', appointments: 12, revenue: 2400 },
  { name: 'Tue', appointments: 19, revenue: 4500 },
  { name: 'Wed', appointments: 15, revenue: 3200 },
  { name: 'Thu', appointments: 22, revenue: 5100 },
  { name: 'Fri', appointments: 18, revenue: 3900 },
  { name: 'Sat', appointments: 10, revenue: 2100 },
  { name: 'Sun', appointments: 8, revenue: 1500 },
];

const recentAppointments = [
  { id: 1, patient: "John Doe", doctor: "Dr. Wilson", time: "10:00 AM", status: "Confirmed", type: "General Checkup" },
  { id: 2, patient: "Alice Cooper", doctor: "Dr. Smith", time: "11:30 AM", status: "Pending", type: "X-Ray" },
  { id: 3, patient: "Robert Brown", doctor: "Dr. Wilson", time: "02:00 PM", status: "Cancelled", type: "Follow-up" },
  { id: 4, patient: "Sarah Miller", doctor: "Dr. Adams", time: "03:15 PM", status: "Confirmed", type: "Consultation" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      {/* Welcome Section */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back, Dr. Sarah. Here's what's happening today.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-border/50 text-sm font-semibold rounded-xl hover:bg-accent transition-colors shadow-sm">
            Download Report
          </button>
          <button className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-md shadow-primary/20 flex items-center gap-2">
            <PlusIcon className="w-4 h-4" />
            New Appointment
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total Patients"
          value="1,284"
          trend="12.5"
          trendUp={true}
          icon={Users}
          color="bg-blue-100 text-blue-600 dark:bg-blue-500/10"
        />
        <StatCard
          label="Appointments"
          value="42"
          trend="8.2"
          trendUp={true}
          icon={Calendar}
          color="bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10"
        />
        <StatCard
          label="Today's Revenue"
          value="$5,240"
          trend="4.1"
          trendUp={false}
          icon={DollarSign}
          color="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10"
        />
        <StatCard
          label="Active Doctors"
          value="18"
          icon={Activity}
          color="bg-rose-100 text-rose-600 dark:bg-rose-500/10"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-border/50 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold tracking-tight">Revenue Analytics</h2>
              <p className="text-sm text-muted-foreground">Showing weekly hospital earnings</p>
            </div>
            <select className="bg-accent/50 border-none text-sm font-medium rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-primary/20 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0284c7" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#0284c7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  tickFormatter={(val) => `$${val}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#0284c7"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-border/50 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold tracking-tight">Recent Activity</h2>
            <button className="text-primary text-sm font-bold hover:underline">View All</button>
          </div>
          <div className="space-y-6">
            {recentAppointments.map((appt) => (
              <div key={appt.id} className="flex items-start gap-4 group cursor-pointer">
                <div className={cn(
                  "mt-1 w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2",
                  appt.status === 'Confirmed' ? "bg-emerald-50 border-emerald-100 text-emerald-600" :
                    appt.status === 'Cancelled' ? "bg-rose-50 border-rose-100 text-rose-600" :
                      "bg-amber-50 border-amber-100 text-amber-600"
                )}>
                  <User className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-sm truncate">{appt.patient}</p>
                    <span className="text-[10px] uppercase font-heavy tracking-wider text-muted-foreground">{appt.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{appt.type}</p>
                  <p className="text-[11px] font-medium mt-1 inline-flex items-center gap-1">
                    <span className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      appt.status === 'Confirmed' ? "bg-emerald-500" :
                        appt.status === 'Cancelled' ? "bg-rose-500" :
                          "bg-amber-500"
                    )}></span>
                    {appt.status} with {appt.doctor}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors mt-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  );
}

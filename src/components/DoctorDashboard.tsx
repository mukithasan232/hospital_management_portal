"use client";

import { useSession } from "next-auth/react";
import { Users, Calendar, Clock, Clipboard, MoreHorizontal, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const doctorStats = [
    { label: "Total Patients", value: "342", icon: Users, color: "text-blue-600 bg-blue-100" },
    { label: "Appointments", value: "12 Today", icon: Calendar, color: "text-indigo-600 bg-indigo-100" },
    { label: "Hours Logged", value: "48h", icon: Clock, color: "text-emerald-600 bg-emerald-100" },
    { label: "Prescriptions", value: "85", icon: Clipboard, color: "text-amber-600 bg-amber-100" },
];

const schedule = [
    { id: 1, patient: "John Doe", time: "09:00 AM", reason: "General Checkup", status: "Upcoming" },
    { id: 2, patient: "Alice Cooper", time: "10:30 AM", reason: "Heart Screening", status: "In Progress" },
    { id: 3, patient: "Robert Brown", time: "11:45 AM", reason: "Follow-up", status: "Upcoming" },
];

export default function DoctorDashboard() {
    const { data: session } = useSession();

    return (
        <div className="space-y-8 max-w-[1400px] mx-auto animate-in">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground mt-1 font-medium">Good morning, Dr. Sarah. You have 12 appointments scheduled for today.</p>
                </div>
                <button className="px-6 py-3 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all text-sm">
                    Export Schedule
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {doctorStats.map((stat) => (
                    <div key={stat.label} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-border/50 shadow-sm">
                        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4", stat.color)}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <p className="text-xs text-muted-foreground font-black uppercase tracking-widest">{stat.label}</p>
                        <p className="text-2xl font-bold mt-1 tracking-tight">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-border/50 shadow-sm overflow-hidden">
                        <div className="p-8 border-b border-border/50 flex justify-between items-center">
                            <h2 className="text-xl font-bold">Today's Appointments</h2>
                            <button className="text-sm font-bold text-primary hover:underline">View Calendar</button>
                        </div>
                        <div className="divide-y divide-border/50">
                            {schedule.map((slot) => (
                                <div key={slot.id} className="p-8 flex items-center gap-6 group hover:bg-accent/5 transition-colors">
                                    <div className="w-20">
                                        <p className="text-sm font-black text-slate-900 dark:text-white">{slot.time}</p>
                                        <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mt-1">30 min</p>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{slot.patient}</h3>
                                        <p className="text-xs font-bold text-muted-foreground mt-1 uppercase tracking-wider">{slot.reason}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-3 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-colors">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </button>
                                        <button className="p-3 bg-rose-50 dark:bg-rose-500/10 text-rose-600 rounded-xl hover:bg-rose-100 transition-colors">
                                            <XCircle className="w-5 h-5" />
                                        </button>
                                        <button className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-400 rounded-xl hover:text-slate-900 transition-colors">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-indigo-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-indigo-600/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-20">
                            <Users className="w-24 h-24" />
                        </div>
                        <h3 className="text-lg font-bold">Patient Analytics</h3>
                        <p className="text-indigo-100/80 text-sm mt-1">Your patient satisfaction is up by 12% this month.</p>
                        <div className="mt-8 flex gap-2">
                            <div className="h-2 flex-1 bg-white/20 rounded-full overflow-hidden">
                                <div className="h-full bg-white w-4/5"></div>
                            </div>
                        </div>
                        <p className="text-[10px] font-black uppercase mt-4 tracking-widest opacity-60">Success Rate: 80%</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-border/50 shadow-sm">
                        <h3 className="font-bold text-lg mb-4">Quick Note</h3>
                        <textarea
                            className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-medium outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                            placeholder="Jot down reminders..."
                            rows={5}
                        ></textarea>
                        <button className="w-full mt-4 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20">
                            Save Note
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

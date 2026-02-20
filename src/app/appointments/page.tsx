"use client";

import { Calendar as CalendarIcon, Clock, User, ChevronLeft, ChevronRight, Plus, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const appointments = [
    { id: 1, time: "09:00 AM", patient: "Emma Watson", doctor: "Dr. Adams", suite: "Room 102", status: "In Progress", color: "bg-blue-500" },
    { id: 2, time: "10:30 AM", patient: "Liam Neeson", doctor: "Dr. Smith", suite: "Room 305", status: "Upcoming", color: "bg-emerald-500" },
    { id: 3, time: "12:00 PM", patient: "Bruce Wayne", doctor: "Dr. Wilson", suite: "Emergency Room", status: "Upcoming", color: "bg-emerald-500" },
    { id: 4, time: "02:15 PM", patient: "Diana Prince", doctor: "Dr. Adams", suite: "Room 102", status: "Pending", color: "bg-amber-500" },
    { id: 5, time: "03:45 PM", patient: "Clark Kent", doctor: "Dr. Smith", suite: "Room 305", status: "Pending", color: "bg-amber-500" },
];

export default function AppointmentsPage() {
    return (
        <div className="space-y-6 max-w-[1400px] mx-auto animate-in">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
                    <p className="text-muted-foreground mt-1">Schedule and manage hospital visits.</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-md shadow-primary/20 flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Set Appointment
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Calendar Picker Mock */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-border/50 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="font-bold text-sm">February 2024</h2>
                            <div className="flex gap-2">
                                <button className="p-1.5 rounded-lg hover:bg-accent"><ChevronLeft className="w-4 h-4" /></button>
                                <button className="p-1.5 rounded-lg hover:bg-accent"><ChevronRight className="w-4 h-4" /></button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center text-[11px] mb-2 font-bold text-muted-foreground">
                            <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                            {Array.from({ length: 28 }).map((_, i) => (
                                <button
                                    key={i}
                                    className={cn(
                                        "aspect-square flex items-center justify-center text-xs rounded-lg transition-colors",
                                        i + 1 === 6 ? "bg-primary text-white font-bold" : "hover:bg-accent"
                                    )}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10">
                        <h3 className="text-primary font-bold text-sm mb-2">Today's Overview</h3>
                        <p className="text-xs text-primary/70 leading-relaxed">
                            You have 12 appointments scheduled for today. 2 are currently in progress.
                        </p>
                        <button className="mt-4 text-xs font-bold text-primary hover:underline flex items-center gap-1">
                            View Detailed Schedule <ChevronRight className="w-3 h-3" />
                        </button>
                    </div>
                </div>

                {/* Schedule View */}
                <div className="lg:col-span-3 space-y-4">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-border/50 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-border/50 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-accent rounded-xl">
                                    <CalendarIcon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h2 className="font-bold">Today's Schedule</h2>
                                    <p className="text-xs text-muted-foreground">Monday, Feb 6, 2024</p>
                                </div>
                            </div>
                            <div className="flex bg-accent/50 p-1 rounded-xl">
                                <button className="px-4 py-1.5 text-xs font-bold bg-white rounded-lg shadow-sm">List</button>
                                <button className="px-4 py-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors">Calendar</button>
                            </div>
                        </div>

                        <div className="divide-y divide-border/50">
                            {appointments.map((appt) => (
                                <div key={appt.id} className="p-6 flex items-center gap-6 group hover:bg-accent/5 transition-colors">
                                    <div className="w-20 shrink-0">
                                        <p className="font-bold text-sm">{appt.time}</p>
                                        <p className="text-[10px] text-muted-foreground uppercase font-heavy tracking-wider">30 mins</p>
                                    </div>

                                    <div className={cn("w-1 h-12 rounded-full shrink-0", appt.color)}></div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{appt.patient}</h3>
                                        <div className="flex items-center gap-4 mt-1">
                                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                                                <User className="w-3 h-3" /> {appt.doctor}
                                            </p>
                                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                                                <MapPin className="w-3 h-3" /> {appt.suite}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className={cn(
                                            "px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider",
                                            appt.status === 'In Progress' ? "bg-blue-100 text-blue-600" :
                                                appt.status === 'Upcoming' ? "bg-emerald-100 text-emerald-600" :
                                                    "bg-amber-100 text-amber-600"
                                        )}>
                                            {appt.status}
                                        </span>
                                        <button className="p-2 rounded-xl hover:bg-accent transition-colors">
                                            <ChevronRight className="w-5 h-5 text-muted-foreground" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

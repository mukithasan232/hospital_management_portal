"use client";

import { ClipboardList, Search, Filter, Download, Eye, Pill, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";

const prescriptions = [
    {
        id: "PRE-001",
        patient: "Emma Watson",
        doctor: "Dr. Sarah Wilson",
        date: "Feb 5, 2024",
        medication: "Amoxicillin",
        dosage: "500mg, 3 times daily",
        status: "Active",
        color: "text-emerald-600 bg-emerald-100 dark:bg-emerald-500/10"
    },
    {
        id: "PRE-002",
        patient: "Liam Neeson",
        doctor: "Dr. Michael Chen",
        date: "Feb 4, 2024",
        medication: "Lisinopril",
        dosage: "10mg, once daily",
        status: "Active",
        color: "text-emerald-600 bg-emerald-100 dark:bg-emerald-500/10"
    },
    {
        id: "PRE-003",
        patient: "Bruce Wayne",
        doctor: "Dr. Elena Rodriguez",
        date: "Feb 1, 2024",
        medication: "Ibuprofen",
        dosage: "400mg, as needed",
        status: "Completed",
        color: "text-slate-600 bg-slate-100 dark:bg-slate-500/10"
    },
    {
        id: "PRE-004",
        patient: "Diana Prince",
        doctor: "Dr. Sarah Wilson",
        date: "Jan 28, 2024",
        medication: "Metformin",
        dosage: "850mg, twice daily",
        status: "Active",
        color: "text-emerald-600 bg-emerald-100 dark:bg-emerald-500/10"
    }
];

export default function PrescriptionsPage() {
    return (
        <div className="space-y-8 max-w-[1400px] mx-auto animate-in">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Prescriptions</h1>
                    <p className="text-muted-foreground mt-1">Manage and track medical prescriptions.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-3 bg-white dark:bg-slate-900 border border-border/50 text-sm font-bold rounded-2xl hover:bg-accent transition-all shadow-sm flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Export All
                    </button>
                    <button className="px-6 py-3 bg-primary text-white text-sm font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                        <Plus className="w-5 h-5" />
                        New Prescription
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-border/50 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-border/50 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by patient or medication..."
                            className="w-full pl-11 pr-4 py-3 bg-accent/50 border-none rounded-2xl focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm font-medium"
                        />
                    </div>
                    <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-accent/50 rounded-2xl text-sm font-bold hover:bg-accent transition-colors">
                        <Filter className="w-4 h-4" /> Filter
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-accent/30">
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Prescription ID</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Patient</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Medication</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Date</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Status</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                            {prescriptions.map((pre) => (
                                <tr key={pre.id} className="hover:bg-accent/10 transition-colors group">
                                    <td className="px-8 py-6 font-bold text-sm text-primary">{pre.id}</td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[10px] font-bold">
                                                {pre.patient.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">{pre.patient}</p>
                                                <p className="text-[10px] text-muted-foreground font-medium">{pre.doctor}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-3">
                                            <Pill className="w-4 h-4 text-primary" />
                                            <div>
                                                <p className="font-bold text-sm">{pre.medication}</p>
                                                <p className="text-[10px] text-muted-foreground font-medium">{pre.dosage}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <p className="text-sm font-medium">{pre.date}</p>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={cn("px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider", pre.color)}>
                                            {pre.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 rounded-xl hover:bg-white hover:shadow-md transition-all text-muted-foreground hover:text-primary">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 rounded-xl hover:bg-white hover:shadow-md transition-all text-muted-foreground hover:text-primary">
                                                <Download className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function Plus({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    );
}

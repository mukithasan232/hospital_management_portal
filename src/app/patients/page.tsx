"use client";

import { Search, Plus, Filter, MoreVertical, Mail, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const patients = [
    { id: "P-1001", name: "John Doe", age: 45, gender: "Male", phone: "+1 234 567 8901", email: "john@example.com", lastVisit: "2024-02-01", status: "Active" },
    { id: "P-1002", name: "Alice Cooper", age: 32, gender: "Female", phone: "+1 345 678 9012", email: "alice@example.com", lastVisit: "2024-01-28", status: "Active" },
    { id: "P-1003", name: "Robert Brown", age: 28, gender: "Male", phone: "+1 456 789 0123", email: "robert@example.com", lastVisit: "2024-01-15", status: "Inactive" },
    { id: "P-1004", name: "Sarah Miller", age: 54, gender: "Female", phone: "+1 567 890 1234", email: "sarah@example.com", lastVisit: "2024-02-03", status: "Active" },
    { id: "P-1005", name: "Michael Young", age: 41, gender: "Male", phone: "+1 678 901 2345", email: "michael@example.com", lastVisit: "2024-01-20", status: "Active" },
    { id: "P-1006", name: "Emma Wilson", age: 29, gender: "Female", phone: "+1 789 012 3456", email: "emma@example.com", lastVisit: "2023-12-15", status: "Inactive" },
];

export default function PatientsPage() {
    return (
        <div className="space-y-6 max-w-[1400px] mx-auto animate-in">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Patients</h1>
                    <p className="text-muted-foreground mt-1">Manage and view all registered patients.</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-md shadow-primary/20 flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Patient
                </button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-border/50 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by name, ID, or email..."
                            className="w-full pl-10 pr-4 py-2 bg-accent/50 rounded-xl border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-xl text-sm font-medium hover:bg-accent transition-colors">
                            <Filter className="w-4 h-4" />
                            Filter
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-xl text-sm font-medium hover:bg-accent transition-colors">
                            Sort by: Newest
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-accent/5 text-[11px] uppercase font-bold text-muted-foreground tracking-wider border-b border-border/50">
                                <th className="px-6 py-4">Patient ID</th>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Last Visit</th>
                                <th className="px-6 py-4">Contact</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                            {patients.map((patient) => (
                                <tr key={patient.id} className="hover:bg-accent/5 transition-colors group">
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">
                                            {patient.id}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-bold text-sm text-foreground">{patient.name}</p>
                                            <p className="text-xs text-muted-foreground">{patient.age} years • {patient.gender}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide",
                                            patient.status === 'Active'
                                                ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10"
                                                : "bg-stone-50 text-stone-600 dark:bg-stone-500/10"
                                        )}>
                                            <span className={cn(
                                                "w-1.5 h-1.5 rounded-full",
                                                patient.status === 'Active' ? "bg-emerald-500" : "bg-stone-400"
                                            )}></span>
                                            {patient.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground font-medium">
                                        {patient.lastVisit}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <button title="Call" className="p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-primary transition-colors">
                                                <Phone className="w-4 h-4" />
                                            </button>
                                            <button title="Email" className="p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-primary transition-colors">
                                                <Mail className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-6 border-t border-border/50 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground font-medium">Showing 6 of 1,284 patients</p>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 rounded-lg border border-border/50 text-xs font-bold hover:bg-accent transition-colors disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-bold shadow-sm">1</button>
                        <button className="px-3 py-1.5 rounded-lg border border-border/50 text-xs font-bold hover:bg-accent transition-colors">2</button>
                        <button className="px-3 py-1.5 rounded-lg border border-border/50 text-xs font-bold hover:bg-accent transition-colors">3</button>
                        <button className="px-3 py-1.5 rounded-lg border border-border/50 text-xs font-bold hover:bg-accent transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

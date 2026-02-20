"use client";

import { Star, Clock, MapPin, Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const doctors = [
    { id: 1, name: "Dr. Sarah Wilson", specialty: "Cardiologist", rating: 4.9, reviews: 124, fee: 150, image: "SW", availability: "Today" },
    { id: 2, name: "Dr. Michael Chen", specialty: "Dermatologist", rating: 4.8, reviews: 89, fee: 120, image: "MC", availability: "Tomorrow" },
    { id: 3, name: "Dr. Elena Rodriguez", specialty: "Pediatrician", rating: 5.0, reviews: 210, fee: 100, image: "ER", availability: "Today" },
    { id: 4, name: "Dr. James Lee", specialty: "Neurologist", rating: 4.7, reviews: 56, fee: 200, image: "JL", availability: "Feb 10" },
    { id: 5, name: "Dr. Olivia Taylor", specialty: "Orthopedic", rating: 4.9, reviews: 145, fee: 180, image: "OT", availability: "Today" },
    { id: 6, name: "Dr. David Smith", specialty: "General Surgeon", rating: 4.6, reviews: 78, fee: 250, image: "DS", availability: "Tomorrow" },
];

export function DoctorGrid({ onSelect }: { onSelect: (doc: any) => void }) {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search doctors by name or specialty..."
                        className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900 border border-border/50 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm font-medium"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-border/50 rounded-2xl text-sm font-bold hover:bg-accent transition-colors shadow-sm">
                        <Filter className="w-4 h-4" /> Filter
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doc) => (
                    <div
                        key={doc.id}
                        className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer"
                        onClick={() => onSelect(doc)}
                    >
                        <div className="flex gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl ring-4 ring-primary/5">
                                {doc.image}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{doc.name}</h3>
                                        <p className="text-xs font-bold text-primary uppercase tracking-wider">{doc.specialty}</p>
                                    </div>
                                    <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-500/10 px-2 py-0.5 rounded-lg">
                                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                                        <span className="text-[10px] font-black text-amber-700 dark:text-amber-400">{doc.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Next Available</p>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-3.5 h-3.5 text-emerald-500" />
                                    <span className="text-xs font-bold">{doc.availability}</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Consultation Fee</p>
                                <p className="text-xs font-bold text-slate-900 dark:text-white">${doc.fee}</p>
                            </div>
                        </div>

                        <button className="w-full mt-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold rounded-xl group-hover:bg-primary group-hover:text-white transition-all active:scale-[0.98]">
                            Book Appointment
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

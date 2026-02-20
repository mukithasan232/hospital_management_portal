"use client";

import { useState } from "react";
import { DoctorGrid } from "@/components/DoctorGrid";
import { BookingModal } from "@/components/BookingModal";
import { Search, Filter, Plus } from "lucide-react";

export default function DoctorsPage() {
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    return (
        <div className="space-y-8 max-w-[1400px] mx-auto animate-in">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Our Specialists</h1>
                    <p className="text-muted-foreground mt-1">Connect with our world-class medical professionals.</p>
                </div>
                <button className="px-6 py-3 bg-primary text-white text-sm font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 w-fit">
                    <Plus className="w-5 h-5" />
                    Add New Doctor
                </button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-border/50 p-8 shadow-sm">
                <DoctorGrid onSelect={(doc) => setSelectedDoctor(doc)} />
            </div>

            {selectedDoctor && (
                <BookingModal
                    doctor={selectedDoctor}
                    onClose={() => setSelectedDoctor(null)}
                />
            )}
        </div>
    );
}

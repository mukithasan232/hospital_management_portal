"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { DoctorGrid } from "@/components/DoctorGrid";
import { BookingModal } from "@/components/BookingModal";
import { Sparkles, Calendar, Activity, Clipboard } from "lucide-react";

export default function PatientDashboard() {
    const { data: session } = useSession();
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    return (
        <div className="space-y-10 max-w-[1400px] mx-auto animate-in">
            {/* Welcome Header */}
            <div className="relative p-10 bg-primary rounded-[3rem] text-white overflow-hidden shadow-2xl shadow-primary/20">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Sparkles className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold tracking-tight">How are you feeling, {session?.user?.name?.split(' ')[0]}?</h1>
                    <p className="text-primary-foreground/80 mt-2 font-medium max-w-lg">
                        Find the right care today. Browse our top-rated specialists or check your upcoming visits.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <button className="px-6 py-3 bg-white text-primary font-bold rounded-2xl shadow-lg hover:scale-105 transition-all text-sm">
                            Check Records
                        </button>
                        <button className="px-6 py-3 bg-primary-foreground/20 text-white font-bold rounded-2xl border border-white/20 hover:bg-white/10 transition-all text-sm">
                            My Appointments
                        </button>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white dark:bg-slate-900 rounded-[2rem] border border-border/50 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600">
                        <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground font-black uppercase tracking-widest">Upcoming</p>
                        <p className="text-xl font-bold">2 Visits</p>
                    </div>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900 rounded-[2rem] border border-border/50 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-rose-100 dark:bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-600">
                        <Activity className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground font-black uppercase tracking-widest">Blood Type</p>
                        <p className="text-xl font-bold">O Positive</p>
                    </div>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900 rounded-[2rem] border border-border/50 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-600">
                        <Clipboard className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground font-black uppercase tracking-widest">Prescriptions</p>
                        <p className="text-xl font-bold">3 Active</p>
                    </div>
                </div>
            </div>

            {/* Doctor Search Section */}
            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Our Specialists</h2>
                        <p className="text-muted-foreground text-sm font-medium">Book appointments with top-rated doctors.</p>
                    </div>
                </div>
                <DoctorGrid onSelect={(doc) => setSelectedDoctor(doc)} />
            </section>

            {selectedDoctor && (
                <BookingModal
                    doctor={selectedDoctor}
                    onClose={() => setSelectedDoctor(null)}
                />
            )}
        </div>
    );
}

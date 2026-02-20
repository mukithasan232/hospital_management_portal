"use client";

import { useState } from "react";
import { X, Calendar as CalendarIcon, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingModalProps {
    doctor: any;
    onClose: () => void;
}

const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];

export function BookingModal({ doctor, onClose }: BookingModalProps) {
    const [step, setStep] = useState(1);
    const [selectedTime, setSelectedTime] = useState("");
    const [loading, setLoading] = useState(false);

    const handleBooking = () => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setStep(3);
        }, 1500);
    };

    if (!doctor) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" onClick={onClose}></div>

            <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] shadow-2xl z-10 border border-white/20 dark:border-white/5 overflow-hidden animate-in">
                <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">Book Appointment</h2>
                            <p className="text-muted-foreground text-sm font-medium mt-1">With {doctor.name}</p>
                        </div>
                        <button onClick={onClose} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:rotate-90 transition-transform">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {step === 1 && (
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Select Date</label>
                                <div className="grid grid-cols-4 gap-2">
                                    {["Mon", "Tue", "Wed", "Thu"].map((day, i) => (
                                        <button
                                            key={day}
                                            className={cn(
                                                "flex flex-col items-center p-4 rounded-2xl border transition-all",
                                                i === 1 ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" : "bg-slate-50 dark:bg-slate-800/50 border-transparent hover:border-primary/30"
                                            )}
                                        >
                                            <span className="text-[10px] font-black uppercase opacity-60">{day}</span>
                                            <span className="text-lg font-bold">{10 + i}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Available Slots</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={cn(
                                                "p-3 rounded-xl border text-sm font-bold transition-all",
                                                selectedTime === time ? "bg-primary/10 border-primary text-primary" : "bg-slate-50 dark:bg-slate-800/50 border-transparent hover:border-primary/30 text-muted-foreground"
                                            )}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => setStep(2)}
                                disabled={!selectedTime}
                                className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/25 disabled:opacity-50 transition-all active:scale-[0.98]"
                            >
                                Continue
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6">
                            <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold">
                                        {doctor.image}
                                    </div>
                                    <div>
                                        <h3 className="font-bold">{doctor.name}</h3>
                                        <p className="text-xs text-primary font-bold">{doctor.specialty}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/10">
                                    <div className="flex items-center gap-2">
                                        <CalendarIcon className="w-4 h-4 text-primary" />
                                        <span className="text-xs font-bold">Feb 11, 2024</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <span className="text-xs font-bold">{selectedTime}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Patient Note</label>
                                <textarea
                                    className="w-full p-4 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 transition-all text-sm font-medium resize-none"
                                    placeholder="Describe your symptoms (optional)..."
                                    rows={3}
                                ></textarea>
                            </div>

                            <div className="flex gap-3">
                                <button onClick={() => setStep(1)} className="flex-1 py-4 bg-slate-100 dark:bg-slate-800 font-bold rounded-2xl hover:bg-slate-200 transition-colors">Back</button>
                                <button
                                    onClick={handleBooking}
                                    className="flex-[2] py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/25 flex items-center justify-center gap-2"
                                >
                                    {loading ? "Confirming..." : "Confirm Booking"}
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="py-8 text-center space-y-4 animate-in">
                            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Booking Confirmed!</h2>
                            <p className="text-muted-foreground font-medium max-w-[280px] mx-auto">
                                Your appointment with {doctor.name} is scheduled for Feb 11 at {selectedTime}.
                            </p>
                            <button
                                onClick={onClose}
                                className="w-full mt-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/25"
                            >
                                Back to Dashboard
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

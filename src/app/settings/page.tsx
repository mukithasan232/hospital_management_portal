"use client";

import { User, Bell, Shield, Globe, Moon, CreditCard, Save, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'billing', label: 'Billing Plan', icon: CreditCard },
    { id: 'display', label: 'Display & UI', icon: Moon },
];

export default function SettingsPage() {
    return (
        <div className="space-y-8 max-w-[1400px] mx-auto animate-in">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
                <p className="text-muted-foreground mt-1">Manage your account preferences and hospital configurations.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <div className="lg:col-span-1 space-y-2">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            className={cn(
                                "w-full flex items-center gap-3 px-6 py-4 rounded-[1.5rem] text-sm font-bold transition-all",
                                section.id === 'profile'
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                            )}
                        >
                            <section.icon className="w-5 h-5" />
                            {section.label}
                        </button>
                    ))}
                </div>

                {/* Settings Content */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-border/50 shadow-sm p-8 space-y-8">
                        <div>
                            <h2 className="text-xl font-bold mb-6">Profile Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Full Name</label>
                                    <input
                                        type="text"
                                        defaultValue="Dr. Sarah Wilson"
                                        className="w-full px-6 py-4 bg-accent/50 border-none rounded-2xl focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm font-bold"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        defaultValue="s.wilson@medos.com"
                                        className="w-full px-6 py-4 bg-accent/50 border-none rounded-2xl focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm font-bold"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Specialization</label>
                                    <input
                                        type="text"
                                        defaultValue="Cardiology"
                                        className="w-full px-6 py-4 bg-accent/50 border-none rounded-2xl focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm font-bold"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Hospital ID</label>
                                    <input
                                        type="text"
                                        defaultValue="MED-SAR-2024"
                                        readOnly
                                        className="w-full px-6 py-4 bg-accent/50 border-none rounded-2xl text-sm font-bold text-muted-foreground"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-border/50">
                            <h2 className="text-xl font-bold mb-6">Security Settings</h2>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between p-6 bg-accent/30 rounded-3xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                            <Shield className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Two-Factor Authentication</p>
                                            <p className="text-xs text-muted-foreground">Add an extra layer of security to your account.</p>
                                        </div>
                                    </div>
                                    <button className="w-12 h-6 bg-primary rounded-full relative">
                                        <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-4">
                            <button className="px-8 py-4 bg-accent text-slate-900 dark:text-white text-sm font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">
                                Cancel
                            </button>
                            <button className="px-8 py-4 bg-primary text-white text-sm font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                                <Save className="w-5 h-5" />
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

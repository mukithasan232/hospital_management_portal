"use client";

import { Bell, Search, User } from "lucide-react";

export function TopNav() {
    return (
        <header className="h-20 border-b bg-white/50 backdrop-blur-md dark:bg-slate-950/50 flex items-center justify-between px-8 sticky top-0 z-10">
            <div className="flex-1 max-w-xl">
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Search patients, appointments, doctors..."
                        className="w-full pl-10 pr-4 py-2 bg-accent/50 rounded-full border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative p-2 rounded-full hover:bg-accent transition-colors">
                    <Bell className="w-5 h-5 text-muted-foreground" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-white"></span>
                </button>

                <div className="h-8 w-[1px] bg-border mx-2"></div>

                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="text-right">
                        <p className="text-sm font-semibold">Dr. Sarah Wilson</p>
                        <p className="text-xs text-muted-foreground font-medium">Chief Medical Officer</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/50 transition-colors overflow-hidden">
                        <User className="w-6 h-6 text-primary" />
                    </div>
                </div>
            </div>
        </header>
    );
}

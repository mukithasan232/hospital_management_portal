"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
    label: string;
    value: string;
    trend?: string;
    trendUp?: boolean;
    icon: LucideIcon;
    color: string;
}

export function StatCard({ label, value, trend, trendUp, icon: Icon, color }: StatCardProps) {
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <div className={cn("p-2.5 rounded-xl", color)}>
                    <Icon className="w-6 h-6" />
                </div>
                {trend && (
                    <span className={cn(
                        "text-xs font-bold px-2 py-1 rounded-full",
                        trendUp ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10" : "bg-rose-50 text-rose-600 dark:bg-rose-500/10"
                    )}>
                        {trendUp ? "+" : "-"}{trend}%
                    </span>
                )}
            </div>
            <div>
                <h3 className="text-muted-foreground text-sm font-medium">{label}</h3>
                <p className="text-2xl font-bold mt-1 tracking-tight">{value}</p>
            </div>
        </div>
    );
}

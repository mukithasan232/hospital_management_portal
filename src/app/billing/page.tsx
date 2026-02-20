"use client";

import { CreditCard, Download, Eye, Search, Filter, TrendingUp, ArrowUpRight, ArrowDownRight, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

const transactions = [
    {
        id: "INV-2024-001",
        patient: "Emma Watson",
        service: "Cardiology Consultation",
        date: "Feb 6, 2024",
        amount: 150.00,
        status: "Paid",
        method: "Visa •••• 4242",
        color: "text-emerald-600 bg-emerald-100 dark:bg-emerald-500/10"
    },
    {
        id: "INV-2024-002",
        patient: "Liam Neeson",
        service: "Blood Analysis",
        date: "Feb 5, 2024",
        amount: 85.00,
        status: "Paid",
        method: "Mastercard •••• 8888",
        color: "text-emerald-600 bg-emerald-100 dark:bg-emerald-500/10"
    },
    {
        id: "INV-2024-003",
        patient: "Bruce Wayne",
        service: "MRI Scan (Spine)",
        date: "Feb 4, 2024",
        amount: 1200.00,
        status: "Pending",
        method: "Bank Transfer",
        color: "text-amber-600 bg-amber-100 dark:bg-amber-500/10"
    },
    {
        id: "INV-2024-004",
        patient: "Diana Prince",
        service: "General Checkup",
        date: "Feb 2, 2024",
        amount: 200.00,
        status: "Overdue",
        method: "Unpaid",
        color: "text-rose-600 bg-rose-100 dark:bg-rose-500/10"
    }
];

export default function BillingPage() {
    return (
        <div className="space-y-8 max-w-[1400px] mx-auto animate-in">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Billing & Invoices</h1>
                    <p className="text-muted-foreground mt-1">Monitor revenue and manage patient invoices.</p>
                </div>
                <button className="px-6 py-3 bg-primary text-white text-sm font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Financial Report
                </button>
            </div>

            {/* Financial Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-border/50 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:scale-110 transition-transform">
                        <DollarSign className="w-24 h-24" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">Total Revenue</p>
                    <h3 className="text-4xl font-black text-slate-900 dark:text-white">$42,500.80</h3>
                    <div className="flex items-center gap-2 mt-4 text-emerald-600 bg-emerald-50 w-fit px-3 py-1 rounded-full text-xs font-bold">
                        <ArrowUpRight className="w-4 h-4" />
                        +12.5% this month
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-border/50 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-amber-500/5 group-hover:scale-110 transition-transform">
                        <CreditCard className="w-24 h-24" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">Pending Payments</p>
                    <h3 className="text-4xl font-black text-slate-900 dark:text-white">$3,120.00</h3>
                    <div className="flex items-center gap-2 mt-4 text-amber-600 bg-amber-50 w-fit px-3 py-1 rounded-full text-xs font-bold">
                        6 invoices awaiting
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-border/50 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-rose-500/5 group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-24 h-24" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">Total Expenses</p>
                    <h3 className="text-4xl font-black text-slate-900 dark:text-white">$12,450.00</h3>
                    <div className="flex items-center gap-2 mt-4 text-rose-600 bg-rose-50 w-fit px-3 py-1 rounded-full text-xs font-bold">
                        <ArrowDownRight className="w-4 h-4" />
                        -3.1% from last month
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-border/50 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-border/50 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search invoices..."
                            className="w-full pl-11 pr-4 py-3 bg-accent/50 border-none rounded-2xl focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm font-medium"
                        />
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-accent/50 rounded-2xl text-sm font-bold hover:bg-accent transition-colors">
                            <Filter className="w-4 h-4" /> Filter
                        </button>
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-accent/50 rounded-2xl text-sm font-bold hover:bg-accent transition-colors">
                            <Download className="w-4 h-4" /> Export
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-accent/30">
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Invoice ID</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Patient</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Service</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Amount</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Status</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                            {transactions.map((tx) => (
                                <tr key={tx.id} className="hover:bg-accent/10 transition-colors group">
                                    <td className="px-8 py-6 font-bold text-sm">{tx.id}</td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[10px] font-bold">
                                                {tx.patient.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">{tx.patient}</p>
                                                <p className="text-[10px] text-muted-foreground font-medium">{tx.date}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <p className="font-bold text-sm">{tx.service}</p>
                                        <p className="text-[10px] text-muted-foreground font-medium">{tx.method}</p>
                                    </td>
                                    <td className="px-8 py-6">
                                        <p className="font-black text-sm">${tx.amount.toFixed(2)}</p>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={cn("px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider", tx.color)}>
                                            {tx.status}
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

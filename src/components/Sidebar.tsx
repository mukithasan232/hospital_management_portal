"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    Calendar,
    UserRound,
    ClipboardList,
    CreditCard,
    Settings,
    LogOut,
    Stethoscope
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Calendar, label: "Appointments", href: "/appointments" },
    { icon: Users, label: "Patients", href: "/patients" },
    { icon: UserRound, label: "Doctors", href: "/doctors" },
    { icon: ClipboardList, label: "Prescriptions", href: "/prescriptions" },
    { icon: CreditCard, label: "Billing", href: "/billing" },
    { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col h-screen w-64 border-r bg-white dark:bg-slate-950 sidebar-shadow">
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <Stethoscope className="text-white w-6 h-6" />
                </div>
                <div>
                    <h1 className="font-bold text-xl tracking-tight">MedOS</h1>
                    <p className="text-xs text-muted-foreground font-medium">Hospital System</p>
                </div>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                            pathname === item.href
                                ? "bg-primary text-white shadow-md shadow-primary/20"
                                : "text-muted-foreground hover:bg-accent hover:text-primary"
                        )}
                    >
                        <item.icon className={cn(
                            "w-5 h-5",
                            pathname === item.href ? "text-white" : "group-hover:text-primary"
                        )} />
                        <span className="font-medium">{item.label}</span>
                    </Link>
                ))}
            </nav>

            <div className="p-4 border-t">
                <button
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors group"
                >
                    <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span className="font-medium">Sign Out</span>
                </button>
            </div>
        </div>
    );
}

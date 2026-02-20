"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { TopNav } from "@/components/TopNav";

export function LayoutContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isLoginPage = pathname === "/login";

    if (isLoginPage) return <main className="min-h-screen">{children}</main>;

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col min-h-screen">
                <TopNav />
                <main className="flex-1 p-8 animate-in overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}

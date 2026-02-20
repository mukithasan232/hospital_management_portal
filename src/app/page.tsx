"use client";

import { useSession } from "next-auth/react";
import AdminDashboard from "@/components/AdminDashboard";
import PatientDashboard from "@/components/PatientDashboard";
import DoctorDashboard from "@/components/DoctorDashboard";
import { Loader2 } from "lucide-react";

export default function Home() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <div className="min-h-[80vh] flex items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
        );
    }

    if (!session) return null; // Middleware will handle redirect

    const role = session.user.role;

    if (role === "ADMIN") return <AdminDashboard />;
    if (role === "DOCTOR") return <DoctorDashboard />;
    if (role === "PATIENT") return <PatientDashboard />;

    return <PatientDashboard />; // Default
}

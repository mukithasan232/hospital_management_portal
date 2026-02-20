"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Stethoscope, Github, Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError("Invalid email or password");
            } else {
                router.push("/");
                router.refresh();
            }
        } catch (err) {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 relative overflow-hidden">
            {/* Decorative Orbs */}
            <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

            <div className="w-full max-w-md space-y-8 z-10 transition-all duration-500">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-primary rounded-2xl shadow-xl shadow-primary/20 mb-6">
                        <Stethoscope className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome to MedOS</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Healthcare at your fingertips</p>
                </div>

                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 dark:border-white/5 shadow-2xl space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-4 font-inter">
                        {error && (
                            <div className="p-4 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 text-sm font-bold rounded-2xl border border-rose-100 dark:border-rose-500/20 animate-in">
                                {error}
                            </div>
                        )}

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1">Work Email</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3.5 bg-slate-100/50 dark:bg-slate-800/50 border-none rounded-2xl focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm font-medium"
                                    placeholder="name@medos.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between ml-1">
                                <label className="text-xs font-bold text-slate-500 dark:text-slate-400">Password</label>
                                <Link href="#" className="text-[10px] font-heavy text-primary hover:underline">Forgot password?</Link>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3.5 bg-slate-100/50 dark:bg-slate-800/50 border-none rounded-2xl focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm font-medium"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
                        >
                            {loading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    Connect <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                        </div>
                        <div className="relative flex justify-center text-xs font-bold text-slate-400 uppercase tracking-widest bg-transparent">
                            <span className="bg-white dark:bg-slate-900 px-4 rounded-full">Or demo access</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <button onClick={() => { setEmail('admin@medos.com'); setPassword('password123') }} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-[10px] font-bold hover:bg-slate-200 transition-colors uppercase tracking-tight">Admin</button>
                        <button onClick={() => { setEmail('doctor@medos.com'); setPassword('password123') }} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-[10px] font-bold hover:bg-slate-200 transition-colors uppercase tracking-tight">Doctor</button>
                        <button onClick={() => { setEmail('patient@medos.com'); setPassword('password123') }} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-[10px] font-bold hover:bg-slate-200 transition-colors uppercase tracking-tight">Patient</button>
                    </div>
                </div>

                <p className="text-center text-slate-500 dark:text-slate-400 text-sm font-medium">
                    New to the platform? <Link href="#" className="text-primary font-bold hover:underline">Get an invite</Link>
                </p>
            </div>
        </div>
    );
}

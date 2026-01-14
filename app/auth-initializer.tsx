'use client';

import { useEffect } from "react";
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from "@/store/auth/auth-store";

export function AuthInitializer() {
  const router = useRouter();
  const pathname = usePathname();
  const { checkAuth, isAuthenticated, isLoading } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && pathname !== '/login') router.push('/login');
  }, [isLoading, isAuthenticated, pathname, router]);

if(isLoading) return <div>Loading...</div>;

return null;
}
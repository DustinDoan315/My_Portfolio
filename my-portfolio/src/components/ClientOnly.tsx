"use client";

// components/ClientOnly.tsx
import { useEffect, useState, ReactNode } from "react";

interface ClientOnlyProps {
  children: ReactNode;
}

/**
 * Component that only renders its children on the client-side
 * This prevents hydration errors from SSR mismatch
 */
const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <>{children}</> : null;
};

export default ClientOnly;

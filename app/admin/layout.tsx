"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
 
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Authenticator>{children}</Authenticator>
      </div>
  
  );
}

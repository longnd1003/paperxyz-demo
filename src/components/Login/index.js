import React from "react";
import { LoginWithPaper } from "@paperxyz/react-client-sdk";

export const Login = () => (
  <LoginWithPaper
    onSuccess={async (code) => {
      await fetch("/api/exchange-user-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
    }}
  />
);

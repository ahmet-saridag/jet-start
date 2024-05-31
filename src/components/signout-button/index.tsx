"use client";

import { signOutAction } from "@/actions/users";
import { useTransition } from "react";

function SignOutButton() {
  const [isPending, startTransition] = useTransition();

  const handleClickSignOutButton = async () => {
    startTransition(async () => {
      await signOutAction();
    });
  };

  return (
    <button
      onClick={handleClickSignOutButton}
      className="p-2 mt-4"
    >
      {isPending ? "Signing Out..." : "Sign Out"}
    </button>
  );
}

export default SignOutButton;

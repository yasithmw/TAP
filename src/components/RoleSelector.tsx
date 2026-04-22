"use client";

import { useState } from "react";

const roles = [
  { key: "artist", label: "I'm an artist" },
  { key: "venue", label: "I'm a venue" },
];

export default function RoleSelector() {
  const [active, setActive] = useState("artist");

  return (
    <div className="role-select" role="tablist">
      {roles.map((role) => (
        <button
          key={role.key}
          onClick={() => setActive(role.key)}
          className={`role-chip${active === role.key ? " active" : ""}`}
        >
          {role.label}
        </button>
      ))}
    </div>
  );
}

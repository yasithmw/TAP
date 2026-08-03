"use client";

const roles = [
  { key: "artist", label: "I'm an Artist" },
  { key: "venue", label: "I Represent a Venue / Service" },
];

interface RoleSelectorProps {
  role: string;
  onRoleChange: (role: string) => void;
}

export default function RoleSelector({ role, onRoleChange }: RoleSelectorProps) {
  return (
    <div className="role-select" role="tablist">
      {roles.map((r) => (
        <button
          key={r.key}
          onClick={() => onRoleChange(r.key)}
          className={`role-chip${role === r.key ? " active" : ""}`}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}

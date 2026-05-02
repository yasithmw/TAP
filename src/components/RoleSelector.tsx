"use client";

const roles = [
  { key: "artist", label: "I'm an artist" },
  { key: "venue", label: "It's a venue" },
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

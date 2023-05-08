import * as React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-md">
      <a href="https://turbo.build/repo/docs">
        <div className="bg-blue-500 text-white">{children}</div>
      </a>
    </div>
  );
};

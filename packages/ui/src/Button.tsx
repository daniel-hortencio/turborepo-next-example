import * as React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-md ">
      <a href="https://turbo.build/repo/docs">
        <div className="ui-flex ui-w-full ui-items-center ui-justify-center ui-rounded-md ui-border ui-border-transparent ui-bg-white ui-px-8 ui-py-3 ui-text-base ui-font-medium ui-text-black ui-no-underline hover:ui-bg-gray-300 md:ui-px-10 md:ui-py-3 md:ui-text-lg md:ui-leading-6">
          {children}
        </div>
      </a>
    </div>
  );
};

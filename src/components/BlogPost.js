import React from "react";
import PublicLayout from "../themes/PublicLayout";

export const BlogPost = ({ children }) => {
  return (
    <PublicLayout headerProps={{ text: "<- Demos", to: "/demos" }}>
      {children}
    </PublicLayout>
  );
};

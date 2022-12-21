import React from "react";

const PageTitle = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <div
      style={{
        height: "5rem",
        width: "100%",
        boxShadow: "0px 15px 10px -15px #111",
      }}
    >
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>{pageTitle}</span>
    </div>
  );
};

export default PageTitle;

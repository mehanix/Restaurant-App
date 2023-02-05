import React from "react";

const PageTitle = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <div
      style={{
        height: "3rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        paddingLeft: "2rem",
        boxShadow: "0px 15px 10px -15px #111",
      }}
    >
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>{pageTitle}</span>
    </div>
  );
};

export default PageTitle;

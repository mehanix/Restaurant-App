import React from "react";

const PageTitle = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <div
      style={{
        height: "8rem",
        width: "60%",
        alignItems: "center",
        textAlign:"center",
        paddingTop:"30px",
        marginLeft: "20%",
        marginRight:"20%",
        marginTop:"30px",
        borderRadius:"10px"
      }}
    >
      <span style={{ fontSize: "40px", fontWeight: "bold"}}>{pageTitle}</span>
    </div>
  );
};

export default PageTitle;

import React from "react";

const LoadingSkeleton = ({ width = "100%", height = "20px", borderRadius = "4px" }) => {
  return <div className="loading-skeleton" style={{ width, height, borderRadius }} />;
};

export default LoadingSkeleton;
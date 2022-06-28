import React from "react";

export default function FeatureCard({
  iconClass,
  feature,
  featureDescription
}) {
  return (
    <div className="feature-card">
      <i className={iconClass}></i>
      <br />
      <h2>{feature}</h2>
      <br />
      <p>{featureDescription}</p>
    </div>
  );
}

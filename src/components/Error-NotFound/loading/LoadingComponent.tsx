import React from "react";
import styles from "./LoadingComponent.module.css";

export default function LoadingDiv() {
  return (
    <div className="container1">
      <div className={styles.loadingWrapper}>
        <h6 className="heading4 ">Loading Data</h6>
      </div>
    </div>
  );
}

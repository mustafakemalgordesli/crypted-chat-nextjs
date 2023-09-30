import React from "react";
import styles from "./spinner.module.css";

export default function Loading() {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner}>
        <div className="after:bg-black after:dark:bg-white"></div>
        <div className="after:bg-black after:dark:bg-white"></div>
        <div className="after:bg-black after:dark:bg-white"></div>
        <div className="after:bg-black after:dark:bg-white"></div>
        <div className="after:bg-black after:dark:bg-white"></div>
        <div className="after:bg-black after:dark:bg-white"></div>
        <div className="after:bg-black after:dark:bg-white"></div>
        <div className="after:bg-black after:dark:bg-white"></div>
        <div className="after:bg-black after:dark:bg-white"></div>
        <div className="after:bg-black after:dark:bg-white"></div>
        <div className="after:bg-black after:dark:bg-white"></div>
        <div className="after:bg-black after:dark:bg-white"></div>
      </div>
    </div>
  );
}

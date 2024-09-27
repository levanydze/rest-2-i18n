"use client";
import React from "react";
import styles from "./ErrorComponent.module.css";
import Link from "next/link";

export default function ErrorDiv() {
  return (
    <section className={`section section-dark ${styles.errorSection}`}>
      <div className="container">
        <div className={styles.errorWrapper}>
          <h1 className={styles.errorCode}>404</h1>
          <h2 className="heading3">Oops! Something went wrong.</h2>
          <p className={styles.errorMessage}>
            The page you're looking for doesn't exist or has been moved. Try
            going back to the homepage.
          </p>
          <Link href="/" className={`button ${styles.backButton}`}>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

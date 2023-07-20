"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/Button/Button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const getData = async () => {
    const response = await fetch("http://localhost:1337/api/add/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await response.json();
    if (data.status === "ok") {
      console.log("GREAT");
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form} onSubmit={getData}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <button
            type="submit"
            class="btn btn-primary btn-block mt-4"
            style={{
              padding: "20px",
              cursor: "pointer",
              backgroundColor: "#53c28b",
              border: "none",
              borderRadius: "5px",
              width: "max-content",
              color: "white",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

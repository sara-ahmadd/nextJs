"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const initState = {
  name: "",
  email: "",
  messege: "",
};

export default function Form() {
  const [form, setFrom] = useState(initState);
  const router = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFrom({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const d = fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: { Content: "Application/json" },
      body: JSON.stringify(form),
    }).then((res) => res);
    router.push("/thanks");
   
    setFrom(initState);
  };

  const { name, email, messege } = form;
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        minWidth: "500px",
        height: "700px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Name"
        id="name"
        value={name}
        onChange={handleChange}
        style={{
          width: "500px",
          height: "100px",
          padding: "20px",
          fontSize: "25px",
        }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        id="email"
        onChange={handleChange}
        style={{
          width: "500px",
          height: "100px",
          padding: "20px",
          fontSize: "25px",
        }}
      />
      <textarea
        placeholder="Messege"
        value={messege}
        id="messege"
        onChange={(e) => setFrom({ ...form, messege: e.target.value })}
        style={{
          width: "500px",
          height: "100px",
          padding: "20px",
          fontSize: "25px",
        }}
      />
      <button
        style={{
          width: "500px",
          height: "100px",
          padding: "20px",
          fontSize: "25px",
        }}
      >
        Submit
      </button>
    </form>
  );
}

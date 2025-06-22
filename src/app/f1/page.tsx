"use client";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";
export default function ComplexDashboardPage() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("http://localhost:3000/first");
      console.log(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1> f1 main page</h1>

      <br />
      <Link href="/f1/f2">Open Profile</Link>
    </>
  );
}

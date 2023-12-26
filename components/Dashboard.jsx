"use client"
import * as React from "react";
import Image from "next/image";
import Footer from "./Footer";
import { useUser } from "@auth0/nextjs-auth0/client";
import Header from "./Header";
import Script from "next/script";

function Dashboard() {

    const { user, error, isLoading } = useUser();

    return (
        <div className="bg-black flex flex-col items-stretch">
            <div className="bg-neutral-900 flex w-full flex-col ">
                <Header/>
                <h1 className="text-white text-lg">Welcome, {user ? user.name : "Guest"}!</h1>
                <p>{isLoading ? "Loading..." : error ? "Error loading user data" : ""}</p>
            </div>
            <Footer/>
        </div>
    );
}

export default Dashboard;

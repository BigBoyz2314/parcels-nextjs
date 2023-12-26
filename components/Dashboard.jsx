"use client"
import * as React from "react";
import Footer from "./Footer";
import { useUser } from "@auth0/nextjs-auth0/client";
import Header from "./Header";


function Dashboard() {

    const { user, error, isLoading } = useUser();

    return (
        <div className="bg-black flex flex-col items-stretch">
            <div className="bg-neutral-900 flex w-full flex-col ">
                <Header/>
                <h1 className="text-white text-lg">Welcome, {user ? user.name : "Guest"}!</h1>
                <h1 className="text-white text-lg">Email: {user ? user.email : ""}!</h1>
                <p>{isLoading ? "Loading..." : error ? "Error loading user data" : ""}</p>
            </div>
            <Footer/>
        </div>
    );
}

export default Dashboard;

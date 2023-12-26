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
                <div className="px-24 py-5" style={{fontSize: "3em"}}>
                <h1 className="text-white">Welcome, {user ? user.name : "Guest"}!</h1>
                <br />
                <h1 className="text-white">Email: {user ? user.email : ""}</h1>
                <p>{isLoading ? "Loading..." : error ? "Error loading user data" : ""}</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Dashboard;

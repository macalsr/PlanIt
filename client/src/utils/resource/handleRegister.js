import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export async function handleRegister(email, username, password, navigate) {
    try {
        const request = await fetch("http://localhost:4000/register", {
            method: "POST",
            body: JSON.stringify({
                email,
                username,
                password,
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const data = await request.json();
        if(data.error_message){
            toast.error(data.error_message);
        } else {
            toast.success(data.message);
            navigate("/");
        }
    } catch (err) {
        console.error(err);
        toast.error("Account creation failed");
    }
}
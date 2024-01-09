"use client";
import { receiveEmail, sendEmail } from "@/app/api/sendEmail/route";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			// Execute both functions in parallel
			await Promise.all([
				sendEmail({ formData }),
				receiveEmail({ formData }),
			]);

			toast.success("Email sent successfully!");
			console.log("Both emails sent successfully!");
		} catch (error) {
			console.error("Error sending emails:", error);
			toast.error("Error sending emails!");
		}
	};

	return (
		<form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
			{/* input */}
			<div className="relative flex items-center">
				<Input
					type="name"
					id="name"
					placeholder="Name"
					value={formData.name}
					onChange={handleChange}
				/>
				<User className="absolute right-6" size={20} />
			</div>
			{/* input */}
			<div className="relative flex items-center">
				<Input
					type="email"
					id="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
				/>
				<MailIcon className="absolute right-6" size={20} />
			</div>
			{/* input */}
			<div className="relative flex items-center">
				<Textarea
					id="message"
					placeholder="Type your Message here"
					value={formData.message}
					onChange={handleChange}
				/>
				<MessageSquare className="absolute top-4 right-6" size={20} />
			</div>
			<Button
				className="flex items-center max-w-[166px] gap-x-1"
				type="submit"
			>
				Let's Talk
				<ArrowRightIcon size={20} />
			</Button>
		</form>
	);
};

export default Form;

"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

interface FormData {
	name: string;
	email: string;
	message: string;
}

export const receiveEmail = async ({ formData }: { formData: FormData }) => {
	try {
		const receivedEmailContent = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

		await resend.emails.send({
			from: "onboarding@resend.dev",
			to: ["george.boholteanu@gmail.com"],
			subject: "Webdev Portfolio - Contact Form",
			text: receivedEmailContent,
		});

		console.log("Email received successfully!");
	} catch (error) {
		console.error("Error receiving email:", error);
		throw new Error("Failed to receive email");
	}
};

export const sendEmail = async ({ formData }: { formData: FormData }) => {
	try {
		const sendEmailContent = `Hi there,\nThanks for reaching out to me! Let me know if I can be of any help!\nYou can mail me at george.boholteanu@gmail.com\n\nAll the best, \nGeorge`;

		const result = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: ["george.boholteanu@gmail.com"],
			subject: "Greetings from George",
			text: sendEmailContent,
		});

		console.log("Email sent successfully:", result);
	} catch (error) {
		console.error("Error sending email:", error);
		throw error; // Rethrow the error to handle it at a higher level
	}
};

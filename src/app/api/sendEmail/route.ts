"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const receiveEmail = async ({ formData }) => {
	const receivedEmailContent = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

	await resend.emails.send({
		from: "onboarding@resend.dev",
		to: ["george.boholteanu@gmail.com"],
		subject: "Webdev Portfolio - Contact Form",
		text: receivedEmailContent,
	});
};

export const sendEmail = async ({ formData }) => {
	const sendEmailContent = `Hi there,\nThanks for reaching out to me! Let me know if I can be of any help!\nYou can mail me at george.boholteanu@gmail.com\n\nAll the best, \nGeorge`;

	await resend.emails.send({
		from: "onboarding@resend.dev",
		to: [formData.email as string],
		subject: "Greetings from George",
		text: sendEmailContent,
	});
};
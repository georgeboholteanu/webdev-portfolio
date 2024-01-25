"use server";
import { Resend } from "resend";

const resendGeorge = new Resend(process.env.NEXT_RESEND_API_KEY);
const resendUser = new Resend(process.env.NEXT_RESEND_API_KEY);

export const POST = async (req: Request, res: Response) => {	
	try {
		// Read the stream as text
		const bodyText = await req.text();

		// Parse the text as JSON
		const formData = JSON.parse(bodyText);

		const receivedEmailContent = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
		
		// const messageContent = `${sendEmailContent}\n\nMessage Received:\n${receivedEmailContent}`
		
		await resendGeorge.emails.send({
			from: "onboarding@resend.dev",
			to: ["george.boholteanu@gmail.com"],
			subject: "Webdev Portfolio - Contact Form",
			text: receivedEmailContent,
		});
		
		// const sendEmailContent = `Hi there,\nThanks for reaching out to me! Let me know if I can be of any help!\nYou can mail me at george.boholteanu@gmail.com\n\nAll the best, \nGeorge`;
		// await resendUser.emails.send({
		// 	from: "onboarding@resend.dev",
		// 	to: [formData.email], //formData.email			
		// 	subject: "Greetings from George",
		// 	text: messageContent,
		// });

		return new Response("formData", { status: 200 });
	} catch (error) {
		return new Response("Internal Server Error", { status: 500 });
	}
};


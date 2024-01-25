"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);


export const POST = async (req: Request, res: Response) => {
	try {
		// Read the stream as text
		const bodyText = await req.text();

		// Parse the text as JSON
		const formData = JSON.parse(bodyText);
		// return new Response(JSON.stringify(data), { status:200 });
		const receivedEmailContent = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

		const data = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: ["george.boholteanu@gmail.com"],
			subject: "Webdev Portfolio - Contact Form",
			text: receivedEmailContent,
		});

		return new Response(formData, { status: 200 });
	} catch (error) {
		return new Response("Internal Server Error", { status: 500 });
	}
};

// export default async function POST(
// 	req: NextApiRequest,
// 	res: NextApiResponse
//   ) {
// 	if (req.method === "POST") {
// 	  try {
// 		const formData: FormData = req.body;

// 		const receivedEmailContent = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

// 		await resend.emails.send({
// 			from: "onboarding@resend.dev",
// 			to: ["george.boholteanu@gmail.com"],
// 			subject: "Webdev Portfolio - Contact Form",
// 			text: receivedEmailContent,
// 		});

// 		res.status(200).json({ success: true });
// 	  } catch (error) {
// 		console.error("Error handling API route:", error);
// 		res.status(500).json({ error: "Internal Server Error" });
// 	  }
// 	} else {
// 	  res.status(405).json({ error: "Method Not Allowed" });
// 	}
//   }

// export const sendEmail = async ({ formData }: { formData: FormData }) => {
// 	try {
// 		const sendEmailContent = `Hi there,\nThanks for reaching out to me! Let me know if I can be of any help!\nYou can mail me at george.boholteanu@gmail.com\n\nAll the best, \nGeorge`;

// 		const result = await resend.emails.send({
// 			from: "onboarding@resend.dev",
// 			to: ["george.boholteanu@gmail.com"],
// 			subject: "Greetings from George",
// 			text: sendEmailContent,
// 		});

// 		console.log("Email sent successfully:", result);
// 	} catch (error) {
// 		console.error("Error sending email:", error);
// 		throw error;
// 	}
// };

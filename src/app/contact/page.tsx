"use client";
import PageWrapper from "@/components/PageWrapper";
import Form from "@/components/contact/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const Contact = () => {
	return (
		<PageWrapper>
			<section>
				<div className="container mx-auto mb-48 mt-24">
					{/* text and illustration */}
					<div>
						{/* text */}
						<div className="flex flex-col justify-center">
							<div className="flex items-center gap-x-4 text-primary text-lg mb-4">
								<span className="w-[30px] h-[2px] bg-primary"></span>
								<div>Say Hello </div>
							</div>
							<h1 className="max-w-md mb-16">
								or send me your feedback
							</h1>
						</div>
					</div>
					{/* info text and form */}
					<div className="grid lg:grid-cols-2 mb-24 lg:mb-32 gap-6">
						<div className="flex flex-col gap-y-4 xl:gap-y-10 xl:mb-24 text-base xl:text-lg">
							{/* mail */}
							<div className="flex items-center gap-x-8">
								<MailIcon size={18} className="text-primary" />
								<div>george.boholteanu@gmail.com</div>
							</div>
							{/* address */}
							<div className="flex items-center gap-x-8">
								<HomeIcon size={18} className="text-primary" />
								<div>London UK</div>
							</div>
							{/* phone */}
							<div className="flex items-center gap-x-8">
								<PhoneCall size={18} className="text-primary" />
								<div>+44 77 593 111 39</div>
							</div>
						</div>
						<Form />
					</div>
				</div>
			</section>
		</PageWrapper>
	);
};

export default Contact;

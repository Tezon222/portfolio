import ContactSection from '../components/ContactSection/ContactSection';
import { Heading } from '../common';

function Contact() {
	return (
		<section className="flex flex-col items-center pt-[5rem]">
			<Heading>Contact Us</Heading>

			<p className="mt-[1rem] text-center text-[1.4rem] max-sm:w-[20ch]">
				Any Questions, Remarks or Projects? Just write a message
			</p>

			<article>
				<ContactSection
					formHeading={'Contact Information'}
					formDescription={'Fill up the form and our team would get back to you within 24hours'}
				/>
			</article>
		</section>
	);
}

export default Contact;

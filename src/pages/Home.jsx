import AboutSection from '../components/AboutSection/AboutSection';
import ContactSection from '../components/ContactSection/ContactSection';
import CoreActivities from '../components/CoreActivities/CoreActivities';
import Hero from '../components/Hero/Hero';
import TeamSection from '../components/TeamSection/TeamSection';
import VideoSection from '../components/VideoSection/VideoSection';

function Home() {
	return (
		<>
			<Hero />
			<VideoSection />
			<CoreActivities />
			<AboutSection />
			<TeamSection />
			<ContactSection />
		</>
	);
}
export default Home;

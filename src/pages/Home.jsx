import HeaderHome from '../components/HeaderHome';
import FooterHome from '../components/FooterHome';
import HeroHome from '../components/HeroHome';
import HeroineHome from '../components/HeroineHome';
import TrustedPartnersHome from '../components/TrustedPartnersHome';
import HeadStartHome from '../components/HeadStartHome';
import HowItWorksHome from '../components/HowItWorksHome';
import CardHome1 from '../components/CardHome1';
import CardHome2 from '../components/CardHome2';
import ConnectHome from '../components/ConnectHome';
import BuildPitchHome from '../components/BuildPitchHome';
import NewFromPitch from '../components/NewFromPitch';
import FooterHome2 from '../components/FooterHome2';
import GettingStarted from '../components/GettingStarted';

import ig1 from "../assets/ig1.jpg";
import ig2 from "../assets/ig2.jpg";
import ig3 from "../assets/ig3.png";
import ig4 from "../assets/ig4.jpg";

function Home() {
	return (
		<div>
			<HeaderHome />
			<HeroHome />
			<HeroineHome />
			<TrustedPartnersHome />
			<HeadStartHome />
			<HowItWorksHome />
			<CardHome1 ig={ig1} card="1 - Start" title="Generate, discover, or build a template" l1="Start with AI or expert-made templates." l2="Create custom templates for your team." l3="Upload your own fonts and brand assets." b1="Start exploring now" />
			<CardHome2 ig={ig2} card="2 - Edit" title="Create sleek slides faster than ever" l1="Quickly add text, images, and interactive content." l2="Build elegant animations in seconds." l3="Collaborate with others in real time." b1="Start creating now" />
			<CardHome1 ig={ig3} card="3 - Share" title="Convince anyone, from anywhere" l1="Share your presentation with a live link." l2="Gather decks, links, and files in pitch rooms." l3="Present with notes, a timer, and other aids." b1="Start sharing now" />
			<CardHome2 ig={ig4} card="4 - Measure" title="Know what’s working and who’s engaged" l1="Manage your team’s outreach in one place." l2="See when someone opens a deck or room." l3="Track which slides your visitors view." b1="Start gaining insights" />
			<ConnectHome />
			<BuildPitchHome />
			<NewFromPitch />
			<GettingStarted />
			<FooterHome />
			<FooterHome2 />
		</div>
	);
}
export default Home;
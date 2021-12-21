import NavbarComponent from "../components/Navbar";
import BannerCoursel from './../components/BannerCoursel';
import Search from './../components/Search';
import GroupCard from './../components/GroupCard';
import Footer from './../components/Footer';

export default function LandingPage() {
    return (
        <div>
            <NavbarComponent/>
            <BannerCoursel/>
            <Search/>
            <GroupCard/>
            <Footer/>
        </div>
    )
}

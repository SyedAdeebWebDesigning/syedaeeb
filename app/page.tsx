import HeroSection from "@/app/components/HeroSection";
import NavBar from "@/app/components/NavBar";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import {Experience} from "@/app/components/Experience";
import Heading from "@/app/components/Heading";

export default function Home() {
    return (
        <>
            <section className="border-b border-white/10 sticky top-0 bg-background z-[999]">
                <NavBar/>
            </section>
            <section>
                <MaxWidthWrapper>
                    <HeroSection/>
                </MaxWidthWrapper>
            </section>
            <section id="experience">
                <MaxWidthWrapper>
                    <div>
                        <Heading text={'Experience'} id={'Experience'}/>
                    </div>
                    <Experience/>
                </MaxWidthWrapper>
            </section>
            <section id="projects">
                <MaxWidthWrapper>
                    <div>
                        <Heading text={'Projects'} id={'Projects'}/>
                    </div>
                    {/* Add Project Content */}
                </MaxWidthWrapper>
            </section>
            <section id="skills">
                <MaxWidthWrapper>
                    <div>
                        <Heading text={'Skills'} id={'Skills'}/>
                    </div>
                    {/* Add Skills Content */}
                </MaxWidthWrapper>
            </section>
            <section id="contact">
                <MaxWidthWrapper>
                    <div>
                        <Heading text={'Contact'} id={'Contact'}/>
                    </div>
                    {/* Add Contact Content */}
                </MaxWidthWrapper>
            </section>
        </>
    );
}

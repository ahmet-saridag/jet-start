import Features from "@/components/features";
import MainSection from "@/components/main-section";
import Publish from "@/components/publish/index";
import Timeline from "@/components/timeline/index";
import Faq from "@/components/faq/index";
import Boost from "@/components/boost/index";
import LoginPage from "@/components/login";

export default function Home() {
  return (
    <>
      <MainSection />
      <Publish />
      <Timeline />
      <Features />
      <Faq />
      <Boost />
      {/* <LoginPage></LoginPage> */}
    </>
  );
}

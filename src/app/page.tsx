import Features from "@/components/features";
import MainSection from "@/components/main-section";
import Publish from "@/components/publish/index";
import Timeline from "@/components/timeline/index";
import Faq from "@/components/faq/index";
import Boost from "@/components/boost/index";

export default function Home() {
  return (
    <>
      <MainSection />
      <Publish />
      <Timeline />
      <Features />
      <Faq />
      <Boost />
    </>
  );
}

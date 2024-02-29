import Header from "@/components/Header/header";
import MainBanner from "@/components/MainBanner/mainBanner";
import TrendingCourses from "@/components/TrendingCourses/trendingCourses";
import BecomeStudentNow from "@/components/BecomeStudentNow/becomeStudentNow";
import PreUniversity from "@/components/PreUniversity/preUniversity";
import Brands from "@/components/Brands/brands";
import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
      <>
          <Header />
          <main>
              <MainBanner />
              <TrendingCourses />
              <PreUniversity />
              <BecomeStudentNow />
              <Brands />
          </main>

          <Footer />
      </>
  );
}

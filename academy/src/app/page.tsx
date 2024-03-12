import MainBanner from "@/components/MainBanner/mainBanner";
import TrendingCourses from "@/components/TrendingCourses/trendingCourses";
import BecomeStudentNow from "@/components/BecomeStudentNow/becomeStudentNow";
import PreUniversity from "@/components/PreUniversity/preUniversity";
import Brands from "@/components/Brands/brands";

export default function Home() {
  return (
      <>
          <MainBanner />
          <TrendingCourses />
          <PreUniversity />
          <BecomeStudentNow />
          <Brands />
      </>
  );
}

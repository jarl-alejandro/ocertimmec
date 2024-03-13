import dynamic from "next/dynamic";
import Main from "@/components/About/Main";
import CorporateValues from "@/components/About/CorporateValues";

const Video = dynamic(() => import("@/components/About/Video"), { ssr: false });

export default function About() {
    return (
        <>
            <Main />
            <CorporateValues />
            <Video />
        </>
    )
}

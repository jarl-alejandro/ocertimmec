import Header from "@/components/TrainingCertification/Detail/Header";
import Detail from "@/components/TrainingCertification/Detail/Detail";

type PageProps = {
    params: {
        slug: string
    }
}

export default function TrainingCertificationDetail(props: PageProps) {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <Detail />
            </div>
        </>
    )
}

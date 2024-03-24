import Header from "@/components/TrainingCertification/Detail/Header";
import Detail from "@/components/TrainingCertification/Detail/Detail";
import {TypeCourse} from "@/core/domain/TypeCourse";

type PageProps = {
    params: {
        slug: string,
        type: TypeCourse,
    }
}

export default function TrainingCertificationDetail(props: PageProps) {
    console.log(props)
    return (
        <>
            <Header />
            <div className="container mt-5">
                <Detail type={props?.params?.type} />
            </div>
        </>
    )
}

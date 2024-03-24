import Header from "@/components/TrainingCertification/Detail/Header";
import Detail from "@/components/TrainingCertification/Detail/Detail";
import {TypeCourse} from "@/core/domain/TypeCourse";
import {CourseDetail, TrainingCertificate} from "@/core/domain/TrainingCertification";

interface RouterParams {
    slug: string,
    type: TypeCourse,
}

type PageProps = {
    params: RouterParams
}

async function getData(routerParams: RouterParams): Promise<CourseDetail> {
    const endpoint = routerParams.type === TypeCourse.Certificate
        ? `${process.env.API_URL}/certificate/${routerParams.slug}`
        : `${process.env.API_URL}/trainings/${routerParams.slug}`;
    const res = await fetch(endpoint)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return  res.json();
}


export default async function TrainingCertificationDetail(props: PageProps) {
    const data: CourseDetail = await getData(props.params)
    const courseDetail: TrainingCertificate = props.params.type === TypeCourse.Certificate
        ? data.certificate as TrainingCertificate
        : data.training as TrainingCertificate;

    return (
        <>
            <Header courseDetail={courseDetail} />
            <div className="container mt-5">
                <Detail type={props?.params?.type} courseDetail={courseDetail} />
            </div>
        </>
    )
}

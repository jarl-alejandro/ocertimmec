import {TypeCourse} from "@/core/domain/TypeCourse";

interface RouterParams {
    courseId: string,
}

type PageProps = {
    params: RouterParams
}

export default function Inscription(props: PageProps) {
    return (
        <h1>Inscripcion { props.params.courseId } </h1>
    )
}

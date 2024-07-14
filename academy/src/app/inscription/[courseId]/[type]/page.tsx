import InscriptionForm from "@/components/Inscription/InscriptionForm";
import React from "react";
import { TypeCourse } from "@/core/domain/TypeCourse";

interface RouterParams {
    courseId: string,
    type: TypeCourse,
}

type PageProps = {
    params: RouterParams
}

export default async function Inscription(props: PageProps) {
    return (
        <div className="container position-relative mt-4">
            <InscriptionForm
                trainingId={props.params.type === TypeCourse.Training ? props.params.courseId : null}
                certificateId={props.params.type === TypeCourse.Certificate ? props.params.courseId : null}
            />
        </div>
    )
}

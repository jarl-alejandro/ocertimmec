import InscriptionForm from "@/components/Inscription/InscriptionForm";
import React from "react";
import { TypeCourse } from "@/core/domain/TypeCourse";
import {CourseDetail} from "@/core/domain/TrainingCertification";

interface RouterParams {
    courseId: string,
    type: TypeCourse,
}

type PageProps = {
    params: RouterParams
}

async function getData(routerParams: RouterParams): Promise<CourseDetail> {
    const endpoint = routerParams.type === TypeCourse.Certificate
        ? `${process.env.API_URL}/certificate/${routerParams.courseId}`
        : `${process.env.API_URL}/trainings/${routerParams.courseId}`;
    const res = await fetch(endpoint)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return  res.json();
}

export default async function Inscription(props: PageProps) {
    const data: CourseDetail = await getData(props.params)
    return (
        <div className="container position-relative mt-4">
            <InscriptionForm
                name={data?.certificate?.name || data?.training?.name}
                trainingId={props.params.type === TypeCourse.Training ? props.params.courseId : null}
                certificateId={props.params.type === TypeCourse.Certificate ? props.params.courseId : null}
            />
        </div>
    )
}

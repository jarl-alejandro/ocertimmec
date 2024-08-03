import MainSection from "@/components/TrainingCertification/MainSection";
import CourseCard from "@/components/CourseCard/courseCard";
import { TrainingCertificate} from "@/core/domain/TrainingCertification";
import style from './course.module.css'

async function getData() {
    const res = await fetch(`${process.env.API_URL}/training-certificate`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function TrainingCertification() {
    const data: TrainingCertificate[] = await getData()

    return (
        <MainSection>
            <h1 className="text-center">CAPACITACIÓN Y CERTIFICACIÓN</h1>

            <div className={`${style.container} mt-6`} style={{ gap: '3rem' }}>
                {data.map(item => (
                    <CourseCard course={item} key={item._id} />
                ))}
            </div>

        </MainSection>
    )
}

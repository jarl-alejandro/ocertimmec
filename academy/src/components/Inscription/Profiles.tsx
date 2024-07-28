"use client";

import {TrainingCertificate} from "@/core/domain/TrainingCertification";
import {useEffect, useState} from "react";
import style from './profile.module.css'
import {isNullOrUndefined} from "@/utils/isNullOrUndefined";

interface ProfilesProps {
    courseId?: string | null,
    register?: any,
    setValue: any,
    name?: string | null,
    isEdit?: boolean
}

export function Profiles(props: ProfilesProps) {
    const [courses, setCourses] = useState<TrainingCertificate[]>([]);
    const [selectedCourses, setSelectedCourses] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/training-certificate`)
            .then(response => response.json())
            .then((json: TrainingCertificate[]) => {
                setCourses(json);

                if (!isNullOrUndefined(props.courseId)) {
                    const found: TrainingCertificate = json.find(i => i._id === props.courseId) as TrainingCertificate;
                    if (!isNullOrUndefined(found)) {
                        handleCheckboxChange(found._id, found.type);
                    }
                }
            });
    }, []);

    const handleCheckboxChange = (id: string, type: string) => {
        const newSelectedCourses = {...selectedCourses, [id]: !selectedCourses[id]};
        setSelectedCourses(newSelectedCourses);

        const coursesToChecked = Object.keys(newSelectedCourses)
            .filter(courseId => newSelectedCourses[courseId])
            .map(courseId => {
                const find: TrainingCertificate | null = courses.find(item => item._id === courseId) as TrainingCertificate;
                if (!isNullOrUndefined(find)) {
                    return {
                        id: find._id,
                        type: find.type
                    }
                }
                return null;
            })
            .filter(Boolean);
        props.setValue(`courses`, coursesToChecked);
    };

    if (props.isEdit) {
        return (
            <div className={style['container-profiles']} style={{ paddingBottom: '2rem' }}>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" checked disabled />
                    <label className="form-check-label">{props.name}</label>
                </div>
            </div>
        )
    }

    return (
        <div className={style['container-profiles']}>
            {courses.map(item => (
                <div className="form-check" key={item._id}>
                    <input type="checkbox"
                           className="form-check-input"
                           id={item._id}
                           checked={selectedCourses[item._id] || false}
                           onChange={() => handleCheckboxChange(item._id, item.type)}
                    />
                    <label className="form-check-label" htmlFor={item._id}>{item.name}</label>
                </div>
            ))}
        </div>
    )
}
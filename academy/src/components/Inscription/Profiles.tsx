"use client";

import {TrainingCertificate} from "@/core/domain/TrainingCertification";
import {useEffect, useState} from "react";
import style from './profile.module.css'
import {isNullOrUndefined} from "@/utils/isNullOrUndefined";

interface ProfilesProps {
    courseId?: string | null,
    register?: any;
    setValue: any;
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
                        const newSelectedCourses = { ...selectedCourses, [found._id]: !selectedCourses[found._id] };
                        setSelectedCourses(newSelectedCourses);

                        props.setValue(`courses.${props.courseId}`, { id: found._id, type: found.type });
                    }
                }
            });
    }, []);

    const handleCheckboxChange = (id: string, type: string) => {
        const newSelectedCourses = { ...selectedCourses, [id]: !selectedCourses[id] };
        setSelectedCourses(newSelectedCourses);

        if (newSelectedCourses[id]) {
            props.setValue(`courses.${id}`, { id, type });
        } else {
            props.setValue(`courses.${id}`, null);
        }
    };

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
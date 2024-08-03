export interface Training {
    content: string;
    materials: string;
}

export interface Certificate {
    requirements: string;
    competition: string;
    competitionUnits: string;
    description: string;
    note: string;
    uc: string,
    sector: string,
    squemaCode: string,
}



export interface TrainingCertificate extends Training, Certificate {
    _id: string;
    id_user: any;
    cost: number;
    place: string;
    name: string;
    type: string;
    photo: string,
    video: string,
    isActive: boolean;
}

export interface CourseDetail {
    training?: TrainingCertificate;
    certificate?: TrainingCertificate;
}

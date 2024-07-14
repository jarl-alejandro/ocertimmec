interface Props {
    register: any;
    errors?: any;
}


export default function Training(props: Props) {
    return (
        <div className="table-responsive">
            <table className="table table-borderless">
                <thead>
                <tr>
                    <th>Nombre del curso</th>
                    <th>Nombre de la institución que impartió el curso</th>
                    <th>Fechas del curso</th>
                    <th>Horas del Curso</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('course1-nameCourse')}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('course1-institutionName')}
                        />
                    </td>
                    <td>
                        <input
                            type="date"
                            className="form-control"
                            {...props.register('course1-dateCourse')}
                        />
                    </td>
                    <td>
                        <input
                            type="number"
                            className="form-control"
                            {...props.register('course1-hourCourse')}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('course2-nameCourse')}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('course2-institutionName')}
                        />
                    </td>
                    <td>
                        <input
                            type="date"
                            className="form-control"
                            {...props.register('course2-dateCourse')}
                        />
                    </td>
                    <td>
                        <input
                            type="number"
                            className="form-control"
                            {...props.register('course2-hourCourse')}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('course3-nameCourse')}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            {...props.register('course3-institutionName')}
                        />
                    </td>
                    <td>
                        <input
                            type="date"
                            className="form-control"
                            {...props.register('course3-dateCourse')}
                        />
                    </td>
                    <td>
                        <input
                            type="number"
                            className="form-control"
                            {...props.register('course3-hourCourse')}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    )
}

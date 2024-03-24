import React from "react";

export default function CurrentEducation() {
    return (
        <div className="table-responsive">
            <table className="table table-borderless">
                <thead>
                <tr>
                    <th scope="col">Nivel de educación</th>
                    <th scope="col">Nombre Institución</th>
                    <th scope="col">País</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Título Obtenido</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="table-text">Primaria</td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            name="primaryInstitutionName"
                        />
                    </td>
                    <td>
                        <input type="text" className="form-control" name="primaryCountry" />
                    </td>
                    <td>
                        <input type="text" className="form-control" name="primaryCity" />
                    </td>
                    <td>
                        <input type="text" className="form-control" name="primaryDegree"/>
                    </td>
                </tr>
                <tr>
                    <td className="table-text">Secundaria</td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            name="secondaryInstitutionName"
                        />
                    </td>
                    <td>
                        <input type="text" className="form-control" name="secondaryCountry" />
                    </td>
                    <td>
                        <input type="text" className="form-control" name="secondaryCity" />
                    </td>
                    <td>
                        <input type="text" className="form-control" name="secondaryDegree" />
                    </td>
                </tr>
                <tr>
                    <td className="table-text">Técnico, Tecnólogo o artesano</td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            name="technicalInstitutionName"

                        />
                    </td>
                    <td>
                        <input type="text" className="form-control" name="technicalCountry" />
                    </td>
                    <td>
                        <input type="text" className="form-control" name="technicalCity" />
                    </td>
                    <td>
                        <input type="text" className="form-control" name="technicalDegree" />
                    </td>
                </tr>
                <tr>
                    <td className="table-text">Tercer nivel</td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            name="tertiaryInstitutionName"

                        />
                    </td>
                    <td>
                        <input type="text" className="form-control" name="tertiaryCountry" />
                    </td>
                    <td>
                        <input type="text" className="form-control" name="tertiaryCity" />
                    </td>
                    <td>
                        <input type="text" className="form-control" name="tertiaryDegree" />
                    </td>
                </tr>
                <tr>
                    <td className="table-text">Cuarto Nivel</td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            name="quaternaryInstitutionName"

                        />
                    </td>
                    <td>
                        <input type="text" className="form-control" name="quaternaryCountry" />
                    </td>
                    <td>
                        <input type="text" className="form-control" name="quaternaryCity" />
                    </td>
                    <td>
                        <input type="text" className="form-control" name="quaternaryDegree" />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

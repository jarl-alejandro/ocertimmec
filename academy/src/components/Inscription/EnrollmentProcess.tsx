import classNames from "classnames";

interface Props {
  register: any;
  errors: any;
}

export function EnrollmentProcess(props: Props) {
  return (
    <div className="table-responsive">
    <table className="table table-borderless">
      <tbody>
        <tr>
          <td width="30%" className="table-title">N° de Cédula:</td>
          <td width="70%">
            <input
                id="document"
                className={classNames("form-control", { "is-invalid": props.errors.document?.type === 'required' })}
                type="text"
                {...props.register('document',  { required: true })}
            />
            {props.errors.name?.type === 'required' && <div className="invalid-feedback" role="alert">El N° de cédula es obligatorio</div>}
          </td>
        </tr>
        <tr>

          <td width="30%" className="table-title">Nombres completo:</td>
          <td width="70%">
            <input
              className={classNames("form-control", { "is-invalid": props.errors.name?.type === 'required' })}
              type="text"
             {...props.register('name',  { required: true })}
            />
            {props.errors.name?.type === 'required' && <div className="invalid-feedback" role="alert">El nombre es obligatorio</div>}
          </td>
        </tr>
        <tr>
          <td width="30%" className="table-title">Apellidos completo:</td>
          <td width="70%">
            <input
              className={classNames("form-control", { "is-invalid": props.errors.lastName?.type === 'required' })}
              type="text"
             {...props.register('lastName',  { required: true })}
            />
            {props.errors.lastName?.type === 'required' && <div className="invalid-feedback" role="alert">El apellido es obligatorio</div>}
          </td>
        </tr>


        <tr>
          <td width="30%" className="table-title">Fecha de nacimiento d/m/año:</td>
          <td width="70%">
            <input
              className={classNames("form-control", { "is-invalid": props.errors.birthdate?.type === 'required' })}
              type="date"
             {...props.register('birthdate',  { required: true })}
            />
            {props.errors.birthdate?.type === 'required' && <div className="invalid-feedback" role="alert">La fecha de nacimiento es obligatoria</div>}
          </td>
        </tr>

        <tr>
          <td width="30%" className="table-title">Dirección de domicilio:</td>
          <td width="70%">
            <input
              className={classNames("form-control", { "is-invalid": props.errors.direction?.type === 'required' })}
              type="text"
             {...props.register('direction',  { required: true })}
            />
            {props.errors.direction?.type === 'required' && <div className="invalid-feedback" role="alert">La dirección es obligatoria</div>}
          </td>
        </tr>

        <tr>
          <td width="30%" className="table-title">Provincia:</td>
          <td width="70%">
            <input
              className={classNames("form-control", { "is-invalid": props.errors.province?.type === 'required' })}
              type="text"
             {...props.register('province',  { required: true })}
            />
            {props.errors.province?.type === 'required' && <div className="invalid-feedback" role="alert">La provincia es obligatoria</div>}
          </td>
        </tr>

        <tr>
          <td width="30%" className="table-title">Ciudad (Parroquia):</td>
          <td width="70%">
            <input
              className={classNames("form-control", { "is-invalid": props.errors.city?.type === 'required' })}
              type="text"
             {...props.register('city', { required: true })}
            />
            {props.errors.city?.type === 'required' && <div className="invalid-feedback" role="alert">La ciudad es obligatoria</div>}
          </td>
        </tr>

        <tr>
          <td width="30%" className="table-title">Teléfono celular:</td>
          <td width="70%">
            <input
              className={classNames("form-control", { "is-invalid": props.errors.celphone?.type === 'required' })}
              type="text"
             {...props.register('celphone', { required: true })}
            />
            {props.errors.celphone?.type === 'required' && <div className="invalid-feedback" role="alert">El celular es obligatorio</div>}
          </td>
        </tr>

        <tr>
          <td width="30%" className="table-title">Teléfono convencional:</td>
          <td width="70%">
            <input
              className={classNames("form-control", { "is-invalid": props.errors.phone?.type === 'required' })}
              type="text"
             {...props.register('phone', { required: true })}
            />
            {props.errors.phone?.type === 'required' && <div className="invalid-feedback" role="alert">El teléfono convencional es obligatorio</div>}
          </td>
        </tr>

        <tr>
          <td width="30%" className="table-title">Correo electrónico:</td>
          <td width="70%">
            <input
              className={classNames("form-control", { "is-invalid": props.errors.email?.type === 'required' })}
              type="text"
             {...props.register('email', { required: true })}
            />
            {props.errors.email?.type === 'required' && <div className="invalid-feedback" role="alert">El correo electrónico es obligatorio</div>}
          </td>
        </tr>

      </tbody>
    </table>
  </div>
  )
}
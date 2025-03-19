import { countries } from "../../data/Countries";
import styles from './Form.module.css'

export default function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="city">Ciudad:</label>
        <input id="city" type="text" name="city" placeholder="Ciudad" />
      </div>

      <div className={styles.field}>
        <label htmlFor="country">Pais:</label>
        <select>
          <option value="">-- Seleccione un Pais --</option>
          {countries.map( country => (
            <option value={country.code} key={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <input className={styles.submit} type="submit" value="Consultar clima" />
    </form>
  );
}

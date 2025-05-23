import { useState, ChangeEvent, FormEvent } from "react";

import { countries } from "../../data/Countries";
import styles from "./Form.module.css";
import type { SearchType } from "../../types";
import Alert from "../Alert/Alert";

type FormProps = {
  fetchWeather: (search: SearchType) => Promise<void>;
};

export default function Form({ fetchWeather }: FormProps) {
  const [search, setSearch] = useState<SearchType>({
    city: "",
    country: "",
  });
  const [alert, setAlert] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlert("");

    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }

    fetchWeather(search);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {alert && <Alert>{"Todos los campos son obligatorios"}</Alert>}
      <div className={styles.field}>
        <label htmlFor="city">Ciudad:</label>
        <input
          id="city"
          type="text"
          name="city"
          placeholder="Ciudad"
          value={search.city}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="country">Pais:</label>
        <select
          id="country"
          value={search.country}
          name="country"
          onChange={handleChange}
        >
          <option value="">-- Seleccione un Pais --</option>
          {countries.map((country) => (
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

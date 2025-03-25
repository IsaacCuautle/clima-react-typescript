import styles from './App.module.css'
import Form from './components/form/Form'
import useWeather from './Hooks/useWeather';

function App() {

  const { fetchWeater } = useWeather()

  return (
  <>
    <h1 className={styles.title}>Buscador de clima</h1>

    <div className={styles.container}>
      <Form
        fetchWeather={fetchWeater}
      />
      <p>2</p>
    </div>
  </>
  )
}

export default App;

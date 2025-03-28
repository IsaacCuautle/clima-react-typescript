import styles from './App.module.css'
import Form from './components/form/Form'
import WeatherDetail from './components/WeatherDetail/WeatherDetail';
import useWeather from './Hooks/useWeather';

function App() {

  const { weather, fetchWeater, hasWeatherData } = useWeather()

  return (
  <>
    <h1 className={styles.title}>Buscador de clima</h1>

    <div className={styles.container}>
      <Form
        fetchWeather={fetchWeater}
      />
      { hasWeatherData && <WeatherDetail weather={weather}/> }
    </div>
  </>
  )
}

export default App;

import styles from './App.module.css'
import Form from './components/form/Form'
import Spinner from './components/Spinner/Spinner';
import WeatherDetail from './components/WeatherDetail/WeatherDetail';
import useWeather from './Hooks/useWeather';

function App() {

  const { weather, fetchWeater, hasWeatherData, loading } = useWeather()

  return (
  <>
    <h1 className={styles.title}>Buscador de clima</h1>

    <div className={styles.container}>
      <Form
        fetchWeather={fetchWeater}
      />
      { loading && <Spinner/> }
      { hasWeatherData && <WeatherDetail weather={weather}/> }
    </div>
  </>
  )
}

export default App;

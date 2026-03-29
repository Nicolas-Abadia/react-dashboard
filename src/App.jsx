import Clock from "./components/Clock.jsx";
import WeatherCard from "./components/WeatherCard.jsx"
import Quote from "./components/Quote.jsx"
import TodoList from "./components/TodoList.jsx"
import "./App.css"

export default function App() {

  return (
    <div className="app">
      <header> <Clock /> </header>
      <main>
        <aside className="card">
          <WeatherCard  />
          Hello, Nicolas!
          <Quote className="card"/>
        </aside>
        <section className="card" className="todolist">
          <TodoList />
        </section>
      </main>
      
    </div>
  );

}

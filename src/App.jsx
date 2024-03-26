import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/TodoList"}>TodoList</Link>
      </nav>
      <Outlet />
    </div>
  );
}
export default App
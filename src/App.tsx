import { Outlet } from 'react-router-dom';
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <sgds-template-grid class="with-sidenav">
      <sgds-aside-area>
        <Sidenav />
      </sgds-aside-area>
      <sgds-content-area>
        <Outlet />
      </sgds-content-area>
    </sgds-template-grid>
  );
}

export default App;

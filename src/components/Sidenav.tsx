import {
  SgdsSidenav,
  SgdsSidenavItem,
} from '@govtechsg/sgds-web-component/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type PageName = "home" | "about"
function Sidenav() {
  const [activeLink, setActiveLink] = useState<PageName>("home")
  return (
        <SgdsSidenav>
          <Link to="home" style={{ textDecoration: 'none', color: 'unset' }}>
            <SgdsSidenavItem href="javascript:void" onClick={() =>setActiveLink("home")} active={activeLink === "home"}>
              <div slot="title">home</div>
            </SgdsSidenavItem>
          </Link>
          <Link to="about" style={{ textDecoration: 'none', color: 'unset' }}>
            <SgdsSidenavItem href="javascript:void" onClick={() =>setActiveLink("about")} active={activeLink === "about"}>
              <div slot="title">about </div>
            </SgdsSidenavItem>{' '}
          </Link>
        </SgdsSidenav>
  );
}

export default Sidenav;

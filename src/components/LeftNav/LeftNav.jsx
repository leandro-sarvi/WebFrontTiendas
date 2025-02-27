import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TerminalIcon from '@mui/icons-material/Terminal';
import WebIcon from '@mui/icons-material/Web';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ContactsIcon from '@mui/icons-material/Contacts';
import { NavLink } from "react-router-dom";
import megaLogo from  '../../assets/mega.png'
import styles from './LeftNav.module.css';
function LeftNav(){
    return (
        <nav className={styles.sidebar}>
          <ul>
          <img src={megaLogo} className={styles.logo} alt="Vite logo" />
          <li className={styles.subTitles}>SOPORTE</li>
          <li>
          
                  <NavLink
                    to={"/"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#EDEDED",
                    },
                    {
                      background: isActive ? "rgba(238, 125, 4, 0.3)" : "",
                    }
                )}
                  >
                    <div className={styles.navLink}>
                    <WebIcon/>
                    <span>WebFront</span>
                    </div>

                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/commands"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#EDEDED",
                    },
                    {
                      background: isActive ? "rgba(238, 125, 4, 0.3)" : "",
                    }
                  )}
                  >
                    <div className={styles.navLink}>
                    <TerminalIcon/>
                    <span>Comandos POS</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/commandspricing"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#EDEDED",
                    },
                    {
                      background: isActive ? "rgba(238, 125, 4, 0.3)" : "",
                    }
                  )}
                  >
                    <div className={styles.navLink}>
                    <TerminalIcon/>
                    <span>Promociones</span>
                    </div>
                  </NavLink>
                </li>
                <li className={styles.subTitles}>UTILITIES</li>
                <li>
                  <NavLink
                    to={"/tiendas"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#EDEDED",
                    },
                    {
                      background: isActive ? "rgba(238, 125, 4, 0.3)" : "",
                    }
                  )}
                  >
                    <div className={styles.navLink}>
                      <BackupTableIcon />
                    <span>Directorio Tiendas</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/contactos"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#EDEDED",
                    },
                    {
                      background: isActive ? "rgba(238, 125, 4, 0.3)" : "",
                    }
                  )}
                  >
                    <div className={styles.navLink}>
                      <ContactsIcon />
                    <span>Contacto Tiendas</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/checksum"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#EDEDED",
                    },
                    {
                      background: isActive ? "rgba(238, 125, 4, 0.3)" : "",
                    }
                  )}
                  >
                    <div className={styles.navLink}>
                    <FormatListNumberedIcon />
                    <span>Dígito de control</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/map"}
                    style={({ isActive }) => ({
                      color: isActive ? "rgba(238,123,4,1)" : "#EDEDED",
                    },
                    {
                      background: isActive ? "rgba(238, 125, 4, 0.3)" : "",
                    }
                  )}
                  >
                    <div className={styles.navLink}>
                    <LocationOnIcon/>
                    <span>MapTiendas</span>
                    </div>
                  </NavLink>
                </li>
          </ul>
          <ul className={styles.version}>
        <li><span>v3.1</span></li>
    </ul>
        </nav>
      );

}
export default LeftNav;
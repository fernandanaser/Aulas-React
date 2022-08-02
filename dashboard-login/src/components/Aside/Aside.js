import { Asidehome, AsideMenu } from "./Aside.styled";
import cat from "./logocat.png"
import { FaHome, FaPowerOff, FaRocket, FaFax, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";


function Aside() {
    return (
        <Asidehome>
            <div>
                <Link to="/"><img width="50" src={cat} alt="logo" /></Link>
                <h2>Dashboard</h2>
            </div>
            <AsideMenu>
                <FaHome />
                <p>Home</p>
            </AsideMenu>
            <AsideMenu>
                <FaRocket />
                <p>Overview</p>
            </AsideMenu>
            <AsideMenu>
                <FaFax />
                <p>Contatos</p>
            </AsideMenu>
            <div></div>
            <AsideMenu>
                <FaCog />
                <p>Configurações</p>
            </AsideMenu>
            <AsideMenu>
                <FaPowerOff />
                <p>Encerrar sessão</p>
            </AsideMenu>
        </Asidehome>
    )
}
export default Aside;
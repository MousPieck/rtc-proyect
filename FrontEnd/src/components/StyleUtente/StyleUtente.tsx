import { Button } from "primereact/button";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../NavBar/Navbar";
import "./StyleUtente.scss";
export const StyleUtente = ({ children }: { children: JSX.Element }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const crea = () => (
		<>
			<div>
				<Button
					className="p-button-raised crea_button p-button-text  animate__animated animate__fadeIn"
					onClick={() => {
						navigate("/utente/newcard");
					}}
					label="Crea"
				></Button>
			</div>
		</>
	);
	return (
		<div className="utente_main">
			<div className="utente_navbar">
				<Navbar />
			</div>
			{pathname === "/utente" && crea()}
			{children}
		</div>
	);
};

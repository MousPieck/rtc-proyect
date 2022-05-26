import { RootState, store } from "../../store/store";
import { PrimeIcons } from "primereact/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IStato } from "../../interface";
import * as auth from "../../store/slices/auth.slice";
import * as ricette from "../../store/slices/ricette.slice";
import "./Navbar.scss";
export const Navbar = () => {
	const navigate = useNavigate();

	const { token } = useSelector((state: RootState) => state.auth.data);
	const { nome }: { nome: string } = useSelector(
		(state: RootState) => state.auth.data || null,
	);

	return (
		<nav className="navbar_p">
			<div>
				<h2 onClick={() => navigate("/")}>
					Ri<span>CE</span>tte
				</h2>
			</div>

			<div className="autenticazione_navbar">
				{nome && (
					<span
						className="nome_navbar"
						onClick={() => {
							const stato: IStato = {
								statiOrdini: "principale",
								stato: "inattivo",
							};
							store.dispatch(ricette.stato(stato));
							navigate("/utente");
						}}
					>
						{" "}
						{nome}{" "}
					</span>
				)}
				<i
					className={token ? PrimeIcons.SIGN_OUT : PrimeIcons.USER}
					onClick={(): void => {
						if (token) {
							store.dispatch(auth.logout());
						}
						navigate("/auth/login");
					}}
				></i>
			</div>
		</nav>
	);
};

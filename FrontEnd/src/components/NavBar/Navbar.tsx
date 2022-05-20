import { PrimeIcons } from "primereact/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/slices/auth.slice";
import { RootState, store } from "../../store/store";

export const Navbar = () => {
	const navigate = useNavigate();

	const { token } = useSelector((state: RootState) => state.auth.data);
	const { nome }: { nome: string } = useSelector(
		(state: RootState) => state.auth.data || null,
	);

	const auth = (): void => {
		if (token) {
			store.dispatch(logout());
		}
		navigate("/auth/login");
	};
	const utenteSchermo = () => {
		navigate("/utente");
	};
	return (
		<nav className="_navbar">
			<div>
				<h2 onClick={() => navigate("/")}>
					Ri<span>CE</span>tte
				</h2>
			</div>

			<div className="autenticazione_navbar">
				{nome && (
					<span className="nome_navbar" onClick={utenteSchermo}>
						{" "}
						{nome}{" "}
					</span>
				)}
				<i
					className={token ? PrimeIcons.SIGN_OUT : PrimeIcons.USER}
					onClick={auth}
				></i>
			</div>
		</nav>
	);
};

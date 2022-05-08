import { PrimeIcons } from "primereact/api";
export const Footer = () => {
	return (
		<footer>
			<div className="top_footer">
				<div className="top_primo"></div>

				<div className="top_mezzo"></div>
				<div className="top_ult"></div>
			</div>
			{/* <hr /> */}
			<div className="sub_footer">
				<div className="sub_primo flex-none"></div>

				<div className="sub_mezzo flex-grow-1">
					<div>
						<i className={PrimeIcons.FACEBOOK}></i>
						<p>aspdoijasdiojasd</p>
					</div>
					<div>
						<i className={PrimeIcons.INSTAGRAM}></i>
						<p>aspdoijasdiojasd</p>
					</div>
					<div>
						<i className={PrimeIcons.TWITTER}></i>
						<p>aspdoijasdiojasd</p>
					</div>
				</div>
				<div className="sub_ult flex-none"></div>
			</div>
			<div className="ult_footer">
				<span>
					Copyright © 2022-2024 RiCtte Company Todos los derechos
					reservados.
				</span>
			</div>
		</footer>
	);
};

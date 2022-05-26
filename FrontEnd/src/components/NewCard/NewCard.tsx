import { store, RootState } from "../../store/store";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IDatiForm, IModifica, IStato } from "../../interface";
import * as ricette from "../../store/slices/ricette.slice";
import "./NewCard.scss";

export const NewCard = () => {
	const navigate = useNavigate();
	const token = useSelector((state: RootState) => state.auth.data.token);
	const cardData = useSelector(
		(state: RootState) => state.ricette.utente.modificare,
	);
	const stato = useSelector(
		(state: RootState) => state.ricette.utente.statoModifica,
	);
	useEffect(() => {
		if (stato && stato === "attivo") {
			const stato: IStato = {
				statiOrdini: "modifica",
				stato: "inattivo",
			};
			store.dispatch(ricette.stato(stato));
			navigate(-1);
		}
	}, [stato]);

	const validatoreCardData = () => {
		if (cardData && Object.entries(cardData).length > 0) {
			return true;
		} else {
			return false;
		}
	};
	const valori = () => {
		if (validatoreCardData()) {
			return {
				_id: cardData._id,
				img: {} as File,
				titolo: cardData.titolo,
				istruzioni: cardData.istruzioni,
			};
		} else {
			return {
				img: {} as File,
				imgUrl: "",
				titolo: "",
				istruzioni: "",
			};
		}
	};
	const [valoreIniziale] = useState(valori);

	return (
		<>
			<div className="formContainer">
				<Formik
					initialValues={valoreIniziale}
					onSubmit={(values) => {
						const { img, titolo, istruzioni } = values;

						if (validatoreCardData()) {
							const dataModifica: IDatiForm = {
								_id: cardData._id,
								token,
								img,
								titolo,
								istruzioni,
							};

							store.dispatch(
								ricette.modificareRicette(dataModifica),
							);
							dataModifica.img = URL.createObjectURL(img);

							store.dispatch(
								ricette.modificare(dataModifica as IModifica),
							);
						} else {
							const dataSalva: IDatiForm = {
								token,
								img,
								titolo,
								istruzioni,
							};
							store.dispatch(ricette.ricetteCreate(dataSalva));
						}
					}}
				>
					{(formik) => (
						<Form className="form_cards">
							<input
								name="img"
								type="file"
								onChange={(e: any) => {
									formik.setFieldValue(
										"img",
										e.target.files[0],
									);
								}}
							/>

							<InputText
								name="titolo"
								placeholder="Titolo"
								value={formik.values.titolo}
								onChange={formik.handleChange}
							/>

							<InputTextarea
								name="istruzioni"
								value={formik.values.istruzioni}
								onChange={formik.handleChange}
							/>

							<div className="form_buttons">
								<Button
									label={
										validatoreCardData()
											? "Modifica"
											: "Salva"
									}
									type="submit"
									className={
										"p-button-raised p-button-success p-button-text"
									}
								/>

								<Button
									label="Annulla"
									type="button"
									className="p-button-raised p-button-text p-button-plain"
									onClick={() => {
										const stato: IStato = {
											statiOrdini: "principale",
											stato: "attivo",
										};
										store.dispatch(ricette.stato(stato));
										navigate(-1);
									}}
								/>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
};

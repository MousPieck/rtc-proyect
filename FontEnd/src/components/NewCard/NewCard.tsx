import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	modificareRicette,
	ricetteCreate,
} from "../../store/slices/ricette.slice";
import { RootState, store } from "../../store/store";

interface IModificareCard {
	id?: string;
	titolo?: string;
	istruzioni?: string;
}
export const NewCard: React.FC<IModificareCard> = () =>
	// data?: IDataForm

	{
		const navigate = useNavigate();
		const token = useSelector((state: RootState) => state.auth.data.token);
		const cardData = useSelector(
			(state: RootState) => state.ricette.utente.modificare,
		);
		const initialValuesBasic = {
			img: {} as File,
			imgUrl: "",
			titolo: "",
			istruzioni: "",
		};
		const initialValueProps = {
			_id: cardData._id,
			img: {} as File,
			titolo: cardData.titolo,
			istruzioni: cardData.istruzioni,
		};

		const cancelare = () => {
			navigate(-1);
		};
		return (
			<>
				<div className="formContainer">
					<Formik
						initialValues={
							Object.entries(cardData).length === 0
								? initialValuesBasic
								: initialValueProps
						}
						onSubmit={(values) => {
							const { img, titolo, istruzioni } = values;
							const data = {
								_id: cardData._id,
								token,
								img,
								titolo,
								istruzioni,
							};

							if (Object.entries(cardData).length === 0) {
								const { _id, ...dataCreate } = data;
								store.dispatch(
									ricetteCreate(dataCreate as any),
								);
							} else {
								store.dispatch(modificareRicette(data as any));
							}
						}}
					>
						{(formik) => (
							<>
								<Form className="form_cards">
									<input
										name="img"
										type="file"
										onChange={(e: any) => {
											const url = URL.createObjectURL(
												e.target.files[0],
											);

											formik.setFieldValue("imgUrl", url);

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
												Object.entries(cardData)
													.length === 0
													? "Salvare"
													: "Modificare"
											}
											type="submit"
											className={
												"p-button-raised p-button-success p-button-text"
											}
											// onClick={creareRicette}
										/>

										<Button
											label="Cancelare"
											type="button"
											className="p-button-raised p-button-text p-button-plain"
											onClick={cancelare}
										/>
									</div>
								</Form>

								{/* <div className="form_card">
									<CardsPrincipale
										immagine={formik.values.imgUrl}
										titolo={formik.values.titolo}
										contenuto={formik.values.istruzioni}
									/>
								</div> */}
							</>
						)}
					</Formik>
				</div>
			</>
		);
	};

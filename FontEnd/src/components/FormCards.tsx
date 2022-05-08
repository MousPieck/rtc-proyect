import { IDataForm } from "../interface";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { FileUpload } from "primereact/fileupload";
import * as Yup from "yup";
import { Button } from "primereact/button";
import { RootState, store } from "../store/store";
import { useSelector } from "react-redux";
import { ricetteCreate } from "../store/actions/ricette.action";

export const FormCards = () =>
	// data?: IDataForm
	{
		const token = useSelector((state: RootState) => state.auth.data.token);
		const initialValues = {
			img: {} as File,
			titolo: "",
			istruzioni: "",
		};

		return (
			<>
				<div className="formContainer">
					<Formik
						initialValues={initialValues}
						onSubmit={(values) => {
							const { img, titolo, istruzioni } = values;
							const data = {
								token,
								img,
								titolo,
								istruzioni,
							};
							store.dispatch(ricetteCreate(data));
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
										label="Salvare"
										type="submit"
										className="p-button-raised p-button-success p-button-text"
										// onClick={creareRicette}
									/>
									<Button
										label="Anteprima"
										type="button"
										className="p-button-raised p-button-info p-button-text"
									/>
									<Button
										label="Cancelare"
										type="button"
										className="p-button-raised p-button-text p-button-plain"
									/>
								</div>
							</Form>
						)}
					</Formik>
					<div className="form_card"></div>
				</div>
			</>
		);
	};

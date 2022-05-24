import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import * as auth from "../../../store/slices/auth.slice";
import { store, RootState } from "../../../store/store";
import { PrimeIcons } from "primereact/api";
export const Register = () => {
	const navigate = useNavigate();
	const initialValues = {
		nome: "",
		email: "",
		password: "",
		confirma: "",
	};
	const stato = useSelector((state: RootState) => state.auth.register);
	useEffect(() => {
		if (stato) {
			navigate("/auth/login");
			store.dispatch(auth.statoRegister(false));
		}
	}, [stato]);

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {}}
				validationSchema={Yup.object({
					nome: Yup.string()
						.min(3, "Il nome deve avere minimo 3 caratteri")
						.required("Il nome è richiesto"),
					email: Yup.string()
						.email("Non è una email valida")
						.required("La E-mail è richiesto"),
					password: Yup.string()
						.min(6, "La password deve avere almeno 6 caratteri")
						.required("La password è richiesta"),
					confirma: Yup.string()
						.oneOf(
							[Yup.ref("password"), null],
							"questa password non corrisponde a quella di prima",
						)
						.required("La password è richiesta"),
				})}
			>
				{(formik) => (
					<>
						<Link className={PrimeIcons.HOME} to="/"></Link>
						<Form className="animate__animated animate__fadeIn">
							<h3>Sign Up</h3>

							<label htmlFor="nome" className="form-label">
								Nome:
							</label>
							<Field
								autoComplete="off"
								name="nome"
								type="text"
								placeholder="Sebastian"
							/>
							<ErrorMessage
								name="nome"
								component="span"
								className="auth__error animate__animated animate__shakeX"
							/>

							<label htmlFor="nome" className="form-label">
								E-mail:
							</label>
							<Field
								autoComplete="off"
								name="email"
								type="email"
								placeholder="example@gmail.com"
							/>
							<ErrorMessage
								name="email"
								component="span"
								className="auth__error animate__animated animate__shakeX"
							/>

							<label htmlFor="password" className="form-label">
								Password:
							</label>
							<Field
								autoComplete="off"
								name="password"
								type="password"
								placeholder="******"
							/>
							<ErrorMessage
								name="password"
								component="span"
								className="auth__error animate__animated animate__shakeX"
							/>

							<label htmlFor="nome" className="form-label">
								Confirm Password:
							</label>
							<Field
								autoComplete="off"
								name="confirma"
								type="password"
								placeholder="******"
								className="auth__password"
								disabled={
									formik.values.password.length < 6 && true
								}
							/>
							<ErrorMessage
								name="confirma"
								component="span"
								className="auth__error animate__animated animate__shakeX"
							/>
							<div className="auth__btns">
								<Button
									type="submit"
									className="p-button-raised p-button-text p-button-plain auth__buttom"
									onClick={() => {
										store.dispatch(
											auth.signUp(formik.values),
										);
										formik.resetForm();
									}}
									disabled={!(formik.isValid && formik.dirty)}
								>
									Sign Up
								</Button>

								<Link to="/auth/login">
									Hai già un account?
								</Link>
							</div>
						</Form>
					</>
				)}
			</Formik>
		</>
	);
};

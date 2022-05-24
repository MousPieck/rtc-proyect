import { store, RootState } from "../../../store/store";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "primereact/button";
import { useEffect } from "react";
import { PrimeIcons } from "primereact/api";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import * as auth from "../../../store/slices/auth.slice";

export const Login = () => {
	const navigate = useNavigate();

	const { token } = useSelector((state: RootState) => state.auth.data);

	useEffect(() => {
		if (token) {
			navigate("/");
		}
	}, [token]);

	const initialValues = {
		email: "",
		password: "",
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values) => {}}
			validationSchema={Yup.object({
				email: Yup.string()
					.email("Non è una email valida")
					.required("La E-mail è richiesto"),
				password: Yup.string()
					.min(6, "La password deve avere almeno 6 caratteri")
					.required("La password è richiesta"),
			})}
		>
			{(formik) => (
				<>
					<Link className={PrimeIcons.HOME} to="/"></Link>
					<Form className="animate__animated animate__fadeIn">
						<h3>Sign In</h3>

						<label htmlFor="nome" className="form-label">
							E-mail:
						</label>
						<Field
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
							name="password"
							type="password"
							placeholder="******"
							className="auth__password"
						/>
						<ErrorMessage
							name="password"
							component="span"
							className="auth__error animate__animated animate__shakeX"
						/>
						<div className="auth__btns">
							<Button
								type="submit"
								onClick={() => {
									store.dispatch(auth.signIn(formik.values));
									formik.resetForm();
								}}
								className="p-button-raised p-button-text p-button-plain auth__buttom"
								disabled={!(formik.isValid && formik.dirty)}
							>
								Sign In
							</Button>

							<Link to="/auth/register">
								Ancora non ti sei registrato?
							</Link>
						</div>
					</Form>
				</>
			)}
		</Formik>
	);
};

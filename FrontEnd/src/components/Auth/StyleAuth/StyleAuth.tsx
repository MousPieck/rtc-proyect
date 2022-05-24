export const StyleAuth = ({ children }: { children: JSX.Element }) => {
	return (
		<div className="auth_main">
			<div className="auth__container animate__animated animate__zoomIn">
				<img
					className="auth__imagine"
					src="/assets/img/auth1.jpg"
				></img>
				<div className="auth__container-f">{children}</div>
			</div>
		</div>
	);
};

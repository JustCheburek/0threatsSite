import "./styles/state.scss";

type Svg = {
	className?: string
	width?: string
	height?: string
}

export const SuccessSvg = ({className = "", width = "1em", height = "1em"}: Svg) => (
		<svg xmlns="http://www.w3.org/2000/svg" className={`successSvg green_color ${className}`} fill="currentColor"
		     viewBox="0 0 16 16" style={{width, height}}>
			<path
					d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
			<path
					d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
		</svg>
)

export const ErrorSvg = ({className = "", width = "1em", height = "1em"}: Svg) => (
		<svg xmlns="http://www.w3.org/2000/svg" className={`errorSvg red_color ${className}`} fill="currentColor"
		     viewBox="0 0 16 16" style={{width, height}}>
			<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
			<path
					d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
		</svg>
)

export const EmailSvg = ({className = "", width, height}: Svg) => (
		<svg
				xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"
				className={`unic_color ${className}`} style={{width, height}}
		>
			<path
					d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
		</svg>
)

export const SearchSvg = ({className = "", width = "1em", height = "1em"}: Svg) => (
		<svg
				xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}
				viewBox="0 0 16 16" style={{width, height}}
		>
			<path
					d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
		</svg>
)

export const AnotherSiteSvg = ({className = "", width = "1em", height = "1em"}: Svg) => (
		<svg
				xmlns="http://www.w3.org/2000/svg" fill="currentColor"
				className={className} viewBox="0 0 16 16"
				style={{width, height}}
		>
			<path
					d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
			<path
					d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
		</svg>
)
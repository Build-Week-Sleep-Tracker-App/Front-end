import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`

body {
	color: ${props => props.theme.fonts.gray};
	font-family: ${props => props.theme.fonts.poppins};
}

.navbar {
	padding: .5rem 10px;
}
.inner {
	width: 100%;
	margin: 0 auto;
	max-width: 300px;
	@media screen and (min-width: 480px) {
		max-width: 400px;
	}
	@media screen and (min-width: 720px) {
		max-width: 640px;
	}
	@media screen and (min-width: 1024px) {
		max-width: 960px;
	}
	@media screen and (min-width: 1280px) {
		max-width: 1200px;
	}
}

a {
	color: inherit;
	text-decoration: none;
}

.btn-link {
	color: ${props => props.theme.colors.gray};
	&:hover {
		color: ${props => props.theme.colors.red};
		text-decoration: none;
	}
}

.navbar .navbar-collapse {
	a {
		padding: 10px;
		&.active {
			color: ${props => props.theme.colors.blue};
			text-decoration: none;
		}
		&:last-child {
			margin-right: -10px;
		}
	}

}

.recharts-wrapper {
	margin: 0 auto;
}

.forms {
	.inner {
		display: flex;
		flex-flow: row wrap;
		align-items: stretch;
		justify-content: space-between;
	}
	.form-column {
		width: 100%;
		max-width: 100%;
		flex-basis: 100%;
		@media screen and (min-width: 1024px) {
			max-width: 50%;
			flex-basis: 50%;
		}
		&:first-child {
			@media screen and (min-width: 1024px) {
				padding-right: 10%;
				border-right: 1px solid ${props => props.theme.colors.red}; // blue
			}
		}
		&:last-child {
			@media screen and (min-width: 1024px) {
				padding-left: 10%;
			}
		}
	}
}

.form-container {
  border: 1px solid silver;
  width: 500px;
  height: 450px;
  font-family: 'Playfair Display';
  box-shadow: 2px 2px grey;
}

.text {
	padding: 10px 0 20px;
	margin-left: 10px;
	color: ${props => props.theme.colors.red}; // blue

	//margin-left: calc(7.5% + 10px);
}

.form-group {
  display: flex;
  flex-direction: column;
  //width: 85%;
  margin: 0 10px;
	padding-bottom: 30px;
}

.sleepEntryForm {
	padding-bottom: 30px;
}
.sleepEntryListSection {
	padding-bottom: 30px;
}

.form-group-cols {
  display: flex;
  flex-flow: row wrap;
  margin: 0 10px;
	padding-bottom: 10px;
	.form-col {
		width: 100%;
		max-width: 100%;
		flex-basis: 100%;
		@media screen and (min-width: 1024px) {
			max-width: 50%;
			flex-basis: 50%;
			&:first-child {
				padding-right: 2%;
			}
			&:last-child {
				padding-left: 2%;
			}
		}
	}
	& + button {
		margin-left: 10px;
	}
}

.input {
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0;
  border: 1px solid silver;
	& + p {
		color: ${props => props.theme.colors.red};
	}
}
.input-radio {
	display: none;
	& + i {
		display: block;
		width: 50px;
		height: 50px;
		border: 2px solid ${props => props.theme.colors.gray};
		transition: all .2s ease-in-out;
		&:before {
			display: block;
			width: auto;
			height: auto;
			font-size: 1.8rem;
			line-height: 48px;
			color: ${props => props.theme.colors.gray};
			transition: all .2s ease-in-out;
		}
	}
	&:checked + i {
		border-color: ${props => props.theme.colors.blue};
		&:before {
			color: ${props => props.theme.colors.blue};
			transform: scale(1.1);
		}
	}
}

fieldset {
	margin-top: 15px;
	label {
		cursor: pointer;
		margin-right: 10px;
	}
}

.input:focus {
  border: 3px solid #007bff;
  outline: none;
}

.button {
  border: none;
  width: 100px;
  height: 40px;
	margin: 10px 0;
  border-radius: 8px;
  background: ${props => props.theme.colors.red}; // blue
  color: white;
  font-size: 16px;
}

.forms {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
	height: calc(100vh - 188px);
  padding-top: 30px;
	.inner {
		height: auto;
	}
}

footer {
	padding-top: 2px;
	background-color: ${props => props.theme.colors.gray};
	.inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	span {
		padding-left: 15px;
		color: white;
	}
	img {
		max-width: 80px;
	}
	a {
		color: white;
		padding: 10px;
		transition: all .2s ease-in-out;
		&:hover {
			text-decoration: none;
			color: ${props => props.theme.colors.red};
		}
	}
}

.sleepEntryList {
	padding: 0 10px;
	display: flex;
	justify-content: flex-start;
	flex-flow: row wrap;
	.sleepEntry {
		cursor: pointer;
		position: relative;
		background-color: ${props => props.theme.colors.red75};
		display: block;
		color: white;
		padding: 20px;
		width: 100%;
		max-width: 100%;
		flex-basis: 100%;
		margin-bottom: 12px;
		@media screen and (min-width: 720px) {
			max-width: calc((100% / 2) - 12px);
			flex-basis: calc((100% / 2) - 12px);
			margin-right: 12px;
		}
		@media screen and (min-width: 1024px) {
			max-width: calc((100% / 3) - 12px);
			flex-basis: calc((100% / 3) - 12px);
			margin-bottom: 18px;
			margin-right: 18px;
		}
		&:nth-child(3n) {
			margin-right: 0;
		}
		.entryInfo {
			width: 100%;
			display: flex;
			justify-content: space-between;
		}
		span {
			&:first-child {
				color: ${props => props.theme.colors.gray};
			}
		}
		&:hover, &.editing, &.clicked {
			.overlay {
				opacity: 1;
				visibility: visible;
			}
		}
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${props => props.theme.colors.gray50};
		opacity: 0;
		visibility: hidden;
		transition: all .33s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		button {
			appearance: none;
			color: ${props => props.theme.colors.gray};
			border: 2px solid ${props => props.theme.colors.gray};
			width: 50px;
			height: 50px;
			margin: 0 6px;
			&:first-child {
				background-color: ${props => props.theme.colors.yellow};
			}
			&:last-child {
				background-color: ${props => props.theme.colors.red};
			}
		}
	}
}

.graphSection {
}
.graph {
	overflow-x: auto;
	max-width: 100%;
}
`;
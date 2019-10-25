import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`

:root {
	font-size: 70%;
	@media screen and (min-width: 425px) {
		font-size: 80%;
	}
	@media screen and (min-width: 640px) {
		font-size: 90%;
	}
	@media screen and (min-width: 720px) {
		font-size: 100%;
	}
}

body {
	color: ${props => props.theme.fonts.gray};
	font-family: ${props => props.theme.fonts.poppins};
}

.navbar {
	padding: .5rem 0;
	justify-content: space-between;
	@media screen and (min-width: 480px) {
		padding: .5rem 10px;
	}
	img {
		width: 100%;
		max-width: 60px;
		@media screen and (min-width: 720px) {
			max-width: 80px;
		}
	}
	.menu {
		a {
			padding: 10px;
			&.active {
				color: ${props => props.theme.colors.blue};
				text-decoration: none;
			}
			@media screen and (min-width: 480px) {
				&:last-child {
					margin-right: -10px;
				}
			}
		}
	}
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

.recharts-wrapper {
	margin: 0 auto;
}


.forms {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 0 30px;
	min-height: calc(100vh - 143px);
	@media screen and (min-width: 720px) {
		min-height: calc(100vh - 188px);
	}
	.inner {
		display: flex;
		flex-flow: row wrap;
		align-items: stretch;
		justify-content: space-between;
		height: auto;
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

.text {
	padding: 10px 0 20px;
	margin-left: 10px;
	color: ${props => props.theme.colors.red}; // blue

	//margin-left: calc(7.5% + 10px);
}

.text-center {
	text-align: center;
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
	h1 {
		padding-bottom: 10px;
	}
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
  height: 40px;
	margin: 10px 0;
  border-radius: 8px;
  background: ${props => props.theme.colors.red}; // blue
  color: white;
  font-size: 16px;
	padding: 0 20px;
	white-space: nowrap;
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
		width: 100%;
		max-width: 60px;
		@media screen and (min-width: 720px) {
			max-width: 80px;
		}
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
			&:nth-child(2n) {
				margin-right: 0;
			}
		}
		@media screen and (min-width: 1024px) {
			max-width: calc((100% / 3) - 12px);
			flex-basis: calc((100% / 3) - 12px);
			margin-bottom: 18px;
			margin-right: 18px;
			&:nth-child(2n) {
				margin-right: 18px;
			}
			&:nth-child(3n) {
				margin-right: 0;
			}
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
	padding-bottom: 30px;
}
.graph {
	margin: 0 10px;
	overflow-x: auto;
	max-width: 100%;
}
.start_tracking {
	display: flex;
	align-items: start;
	justify-content: space-between;
	flex-direction: column;
	padding-bottom: 20px;
	button {
		margin: 0 10px;
	}
	@media screen and (min-width: 720px) {
		align-items: center;
		flex-direction: row;
		padding-bottom: 0;
	}
}
.alignWithHeader {
	padding: 0 10px;
}

.loading {
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.colors.gray50};
	.spinner {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(2);
	}
}
`;
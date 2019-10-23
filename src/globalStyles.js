import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`

.navbar {
	padding: .5rem 10px;
}
.inner {
	width: 100%;
	margin: 0 auto;
	max-width: 1200px;
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
		flex-flow: row nowrap;
		align-items: stretch;
		justify-content: space-between;
	}
	.form-column {
		width: 100%;
		max-width: 50%;
		flex-basis: 50%;
		&:first-child {
			padding-right: 10%;
			border-right: 1px solid ${props => props.theme.colors.blue};
		}
		&:last-child {
			padding-left: 10%;
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
		border-color: ${props => props.theme.colors.green};
		&:before {
			color: ${props => props.theme.colors.green};
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

/* mobile screen size */
@media (max-width: 500px) {
  .form-container {
    max-width: 100%;
    margin: 0 auto;
    height: 450px;
    margin: 10px;
  }

  .form-group {
    max-width: 80%;
  }
}

/* tablet screen size */
@media (max-width: 700px) {
  .form-container {
    max-width: 100%;
    margin: 0 auto;
    height: 300px;
    margin: 10px;
  }

  .form-group {
    max-width: 80%;
  }
}










.forms {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 30px;
}

/* mobile screen size */
@media (max-width: 500px) {
  .forms {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }
}

/* tablet screen size */
@media (max-width: 800px) {
  .forms {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }
}










.logout-container {
  margin: 0 auto;
  margin-top: 150px;
  width: 50%;
  text-align: center;
  height: 200px;
  padding-top: 50px;
  box-shadow: 2px 2px grey;
  border: 1px solid silver;
}










.sleepEntry {
  font-family: 'Roboto', sans-serif;
}

`;
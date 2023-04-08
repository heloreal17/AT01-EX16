/** @format */

//'use client';

import { useState, SetStateAction, Dispatch, DetailedHTMLProps, InputHTMLAttributes } from "react";

type setState = [string, Dispatch<SetStateAction<string>>];

export let ChangePage: boolean = false;

export default function Cadastro() {
	const [name, setName]: setState = useState("");
	const [email, setEmail]: setState = useState("");
	const [senha, setSenha]: setState = useState("");

	/* alert teste */
	function sendEmail(
		$event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
	) {
		//$event.preventDefault();

		/* campos vazios < */
		if (name === "" || email === "" || senha === "") {
			alert("Preencha todos os campos solicitados!");
			return;
		}

		//let hash = make_hash(senha)

		//console.log(hash)

		ChangePage = true;

		console.log(ChangePage);

		alert("Obrigada por enviar a sua resposta!");
	}

	return (
		<>
			<div className="border">
				<h1 className="title">AT01 - EXERCÍCIO 16</h1>
				<h2 className="subtitle">
					Heloísa Real - 13299 | Mateus Felipe - 14598 | Thiago Baptista - 12264
				</h2>
				<form className="form">
					<input
						className="input"
						type="text"
						placeholder="Digite seu nome"
						onChange={($event) => setName($event.target.value)}
						value={name}
						maxLength={80}
					/>

					<input
						className="input"
						type="email"
						placeholder="Digite seu email"
						onChange={($event) => setEmail($event.target.value)}
						value={email}
						maxLength={50}
					/>

					<input
						className="input"
						type="password"
						placeholder="Digite a sua senha"
						onChange={($event) => setSenha($event.target.value)}
						value={senha}
					/>
					<input onClick={sendEmail} className="button" type="submit" value="Concluir" />
				</form>
			</div>
		</>
	);
}

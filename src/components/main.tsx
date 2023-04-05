import { useState } from "react";
import "../App.css";

/* use states, salvando nas states */
export default function Acesso() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  /* alert teste */
  function sendEmail(e:any) {
    e.preventDefault();

    /* campos vazios < */
    if (name === "" || email === "" || senha === "") {
      alert("Preencha todos os campos solicitados!");
      return;
    }

    alert("Obrigada por enviar a sua resposta!");
    
  }

  return (
    <div className="container">
      <div className="borda "></div>
      <h1 className="title">AT01 - EXERCÍCIO 16</h1>
      <h2 className="subtitle">
        Heloísa Real - 13299 | Mateus Felipe - 14598 | Thiago Baptista - 12264
      </h2>
      <form className="form" onSubmit={sendEmail}>
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
          maxLength={80}
        />

        <input
          className="input"
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          maxLength={50}
        />

        <input
          className="input"
          type="password"
          placeholder="Digite a sua senha"
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
        />
        <input className="button" type="submit" value="Concluir" />
      </form>
    </div>
  );
}


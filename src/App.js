import React, { useState } from "react";
import "./styles.css";

function Cadastro() {
  const [data, setData] = useState("");
  const [userType, setUserType] = useState("");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.id);
    // Limpar os estados de dados
    setData("");
  };

  const renderCommonFields = () => (
    <>
      <div className="input-box">
        <label htmlFor="data">Data de Nascimento</label>
        <input
          id="data"
          type="date"
          name="data"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
      </div>
    </>
  );

  const renderProfessorFields = () => (
    <div className="input-box">
      <label htmlFor="disciplina">Disciplina</label>
      <input
        placeholder="Digite a disciplina que leciona"
        id="disciplina"
        type="text"
        name="disciplina"
      />
    </div>
  );

  const renderAlunoFields = () => (
    <div className="input-box">
      <label htmlFor="matricula">Matrícula</label>
      <input
        placeholder="Digite sua matrícula"
        id="matricula"
        type="text"
        name="matricula"
      />
    </div>
  );

  const renderInstituicaoFields = () => (
    <div className="input-box">
      <label htmlFor="cnpj">CNPJ</label>
      <input
        placeholder="Digite o CNPJ da instituição"
        id="cnpj"
        type="text"
        name="cnpj"
      />
    </div>
  );

  return (
    <div className="container">
      <div className="form-image"></div>
      <div className="form">
        <form action="#">
          <div className="form-header">
            <div className="title">
              <h1>Cadastre-se</h1>
            </div>
            <div className="login-button">
              <button>
                <a href="#">Entrar</a>
              </button>
            </div>
          </div>

          <div className="input-group">
            <div className="gender-inputs">
              <div className="gender-title">
                <h6>Tipo de Usuário:</h6>
              </div>

              <div className="gender-group">
                <div className="gender-input">
                  <input
                    id="professor"
                    type="radio"
                    name="gender"
                    onChange={handleUserTypeChange}
                  />
                  <label htmlFor="professor">Professor</label>
                </div>

                <div className="gender-input">
                  <input
                    id="aluno"
                    type="radio"
                    name="gender"
                    onChange={handleUserTypeChange}
                  />
                  <label htmlFor="aluno">Aluno</label>
                </div>

                <div className="gender-input">
                  <input
                    id="instituicao"
                    type="radio"
                    name="gender"
                    onChange={handleUserTypeChange}
                  />
                  <label htmlFor="instituicao">Instituição</label>
                </div>
              </div>
            </div>

            {userType === "professor" && renderProfessorFields()}
            {userType === "aluno" && renderAlunoFields()}
            {userType === "instituicao" && renderInstituicaoFields()}

            {renderCommonFields()}
          </div>

          <div className="continue-button">
            <button>
              <a href="#">Continuar</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;







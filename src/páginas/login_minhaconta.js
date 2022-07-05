import { Header } from '../componentes/header';

export function Login_MinhaContaContainer() {
    return (
        <>
        <Header />
       
        <div className="Main container">
         
            <img src="../images/borda.png" />

            <div className="Foto">
                <img src="../images/image.png" />
            </div>

            <div className="circulo">
                <img src="../images/circulo.png" />
            </div>

            <div className="camera">
                <a href="#"><img src="../images/camera.png" /></a>
            </div>

            <div className="Editar">
                <a href="#">Editar perfil</a>
            </div>

            <div className="Senha">
                <a href="#">Alterar senha</a>
            </div>

            <div className="Sair">
                <a href="#">Sair</a>
            </div>

            <div className="nome">
                <p>Nome completo</p>
                <div className="Nome_completo">
                    <h1>Arielle Lopes Vogas</h1>
                </div>
            </div>

            <div className="email">
                <p>E-mail</p>
                <div className="E-mail">
                    <h1>arielle.vogas@gmail.com</h1>
                </div>
            </div>

            <div className="usuario">
                <p>Usuario</p>
                <div className="Usuario_">
                    <h1>ari.vogas</h1>
                </div>
            </div>

            <div className="telefone">
                <p>Telefone celular</p>
                <div className="Telefone_celular">
                    <h1>(11) 99584-4316</h1>
                </div>
            </div>

            <div className="cpf">
                <p>CPF</p>
                <div className="CPF_">
                    <h1>462.179.414-06</h1>
                </div>
            </div>

            <div className="nasc">
                <p>Data de nascimento</p>
                <div className="data_nasc">
                    <h1>09/01/1991</h1>
                </div>
            </div>



        </div>
        </>
    );


}
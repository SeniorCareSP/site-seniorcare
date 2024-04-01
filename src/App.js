import api from "./api";
import "./home.css";
function App() {
    function listar() {
        api.get()
            .then((respostaObtida) => {
                // cairá aqui se a requisição for realizada
                console.log(respostaObtida);
            })
            .catch((erroOcorrido) => {
                // cairá aqui se houver algum erro durante a requisição
                console.log(erroOcorrido);
            })
    }
    return (
        <>
            
            <div class="header">

                <div>
                    <a href="">Sobre</a>
                    <a href="">Serviços</a>
                    <a href="">Contato</a>
                    <a href="">Cadastre-se!</a>
                    <button>Login</button>
                </div>

            </div>
            <div class="apresentacao">
                <div class="texto">
                    <h1>
                        Conectando corações, <span>cuidando</span> de quem você ama.
                    </h1>
                    <p>
                        <button>Saiba mais </button>
                    </p>
                </div>

                <div class="imagem_idosos">
                    <span class="cube1"></span>
                    <span class="cube2"></span>

                </div>

                <div class="forma"></div>

            </div>

            <div class="empresa">
                <h2>
                    Nós da Senior Care somos uma
                </h2>

                <div>
                    <span class="linha"></span>
                    <h1>
                        Empresa
                    </h1>
                    <span class="linha"></span>
                </div>
                <div class="descricao">
                    <p>
                        Comprometida em atender às necessidades crescentes de uma
                        população que envelhece rapidamente.
                        Em um mundo onde encontrar cuidadores
                        confiáveis para os nossos entes queridos se
                        tornou uma necessidade crucial, assumimos a responsabilidade
                        de oferecer não apenas assistência, mas também conforto e confiança.
                        A Senior Care não é apenas uma empresa; é uma promessa de qualidade,
                        segurança e tranquilidade para sua família. Estamos aqui para
                        garantir que seus entes queridos recebam o cuidado atencioso
                        e dedicado que merecem.
                    </p>

                </div>
            </div>

            <div class="servico">
                <span class="obj1"></span>
                <h1>Serviços</h1>
                <p>
                    Não importa se você precisa de um cuidador em tempo integral para auxiliar em casa ou ocasionalmente durante a semana - o Senior Care ajuda você a se conectar e conversar com cuidadores qualificados perto de você.
                </p>
                <button>Comece agora</button>
                <span class="obj2"></span>
                <span class="obj3"></span>
            </div>

        </>
    );
}
export default App;




const Cursos = () => {
  return (
    <>
      <div id="pagina-escrita">
        <p>
          Cursos totalmente online e gratuitos, oferecidos de forma assíncrona
          e organizados em 10 módulos. Ao concluir todos os módulos com um
          desempenho igual ou superior a 70%, você poderá gerar automaticamente
          seu certificado de horas, que será enviado diretamente para o seu
          e-mail.
        </p>

        <div className="curso-item">
          <h3>
            Introdução ao Cálculo -{' '}
            <a href="https://classroom.google.com/c/NzEzMTU2NTA5ODY0?cjc=deqshid">
              INSCRIÇÃO
            </a>
          </h3>
          <h2>Duração: 60 horas</h2>
          <p>
            <strong>Ementa:</strong> Teoria de conjuntos e funções; Funções de 1º e 2º grau,
            incluindo função módulo e suas aplicações; Funções trigonométricas (seno,
             cosseno, tangente) e suas inversas, além das funções
            trigonométricas complementares (secante, cossecante e cotangente) e
            suas inversas; Estudo de funções exponenciais e logarítmicas;
            Progressão aritmética(PA) e progressão geométrica(PG); Sequências
            e séries; Conceito e definição de limite, incluindo limites laterais;
            Teorema do confronto; Funções contínuas e limites tendendo ao
            infinito.
          </p>
        </div>

        <div className="curso-item">
          <h3>
            Introdução ao Scratch -{' '}
            <a href="https://classroom.google.com/c/NzIzMjg5NDY1NDI4?cjc=beihezj">
              INSCRIÇÃO
            </a>
          </h3>
          <h2>Duração: 20 horas</h2>
          <p>
          <strong>Ementa:</strong> Blocos de movimento para controle de deslocamento e direção
            dos atores; blocos de aparência para alterar fantasias, balões de
            fala e efeitos visuais. Blocos de som para tocar sons e criar trilhas
            sonoras. Blocos de evento para iniciar scripts com interações do
            usuário ou do sistema. Blocos de controle para gerenciar loops e
            condições lógicas. Blocos de sensores para detectar interações com o
            ambiente e outras variáveis. Blocos de operadores para realizar
            operações matemáticas e lógicas. Blocos de variáveis para armazenar
            e manipular dados dinâmicos. Criação e utilização de blocos
            personalizados para reutilização de código. Estudo da extensão de
            caneta, incluindo manipulação de cores, tamanhos e desenho na tela.
          </p>
        </div>
      </div>
    </>
  );
};

export default Cursos;

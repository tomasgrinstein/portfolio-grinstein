// App.jsx
// Portfolio profesional – Tomás Grinstein

import profilePic from "./assets/profile.png";
import sImage from "./assets/s.JPG";

const PROJECTS = [
  {
    title: "Sign AI (mobile)",
    desc: "Front-End en React Native / Expo para traduccion de lenguaje de señas.",
    stack: ["React Native", "Expo", "Mobile FE"],
  },
  {
    title: "Gestor de tareas ORT",
    desc: "App web rápida para organizar materias y entregas.",
    stack: ["React", "JS"],
  },
  {
    title: "Simulador inventario",
    desc: "Entradas/salidas basado en experiencia administrativa (Diaxos).",
    stack: ["Python", "Excel"],
  },
];

function App() {
  return (
    <div className="page">
      {/* NAV */}
      <header className="topbar glass">
        <div className="brand">tomasgrinstein.dev</div>
        <nav className="topnav">
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#signai">Sign AI</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="topbtn" href="#contacto">
          Hablemos
        </a>
      </header>

      {/* HERO */}
      <main className="content" id="inicio">
        <section className="hero-modern">
          <div className="hero-left">
            <span className="hero-badge">ORT · 5º TIC · 2025</span>

            <h1 className="hero-title fade-in">
              Hola, soy <span className="grad-text">Tomás Grinstein</span>
            </h1>

            <p className="hero-sub fade-in-delayed">
              Un curioso incansable que combina <strong>lógica</strong> y{" "}
              <strong>creatividad</strong>. <br />
              Me apasiona entender cómo funcionan las cosas, programarlas y
              mejorarlas. <br />
              Cursando Quinto año en la orientacion <strong>TIC en ORT</strong>, trabajo en{" "}
              <strong>Diaxos</strong> y me preparo para estudiar{" "}
              <strong>Ingeniería Industrial</strong>. <br />
              Si algo me define, es la búsqueda constante de{" "}
              <strong>aprender</strong> y <strong>crear con propósito</strong>.
            </p>

            <div className="hero-actions fade-in-delayed">
              <a className="primary big" href="#proyectos">
                Ver mis proyectos
              </a>
              <a className="ghost" href="#signai">
                Ver Sign AI
              </a>
            </div>

            <div className="hero-tags fade-in-delayed">
              <span>React / Vite</span>
              <span>React Native</span>
              <span>Innovación</span>
              <span>Trabajo en equipo</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="photo-card">
              <img
                src={profilePic}
                alt="Foto de Tomás Grinstein"
                className="profile-img"
              />
              <div className="photo-label">
                <p className="photo-name">Tomás Grinstein</p>
                <p className="photo-role">Estudiante ORT · TIC</p>
              </div>
            </div>

            <div className="hero-floating">
              <p className="hf-title">+3 proyectos</p>
              <p className="hf-sub">React · RN · Escolar</p>
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="section projects-section">
          <div className="section-header row-header">
            <h2>Proyectos</h2>
            <span className="muted-small">
              Trabajos reales de la escuela y prácticas personales
            </span>
          </div>

          <div className="projects-grid">
            {PROJECTS.map((proj) => (
              <article key={proj.title} className="project-card">
                <div className="project-top">
                  <span className="project-pill">Proyecto</span>
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                </div>
                <div className="project-bottom">
                  <div className="project-tags">
                    {proj.stack.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="project-btn">Ver →</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SIGN AI DESTACADO */}
        <section id="signai" className="section signai">
          <div className="section-header row-header">
            <h2>Sign AI</h2>
            <span className="muted-small">
              Proyecto destacado (React Native)
            </span>
          </div>

          <div className="signai-box colorful">
            <div>
              <h3>App mobile de accesibilidad</h3>
              <p>
                Proyecto pensado para ayudar a las personas que no hablan a hablar y expresarse con libertad!,
                navegación con Expo Router y accesibilidad. Pantallas:
                home, login, menú inferior y módulo de práctica.
              </p>

              <ul className="signai-list">
                <li>⚡ React Native + Expo</li>
                <li>📱 Diseño limpio y moderno</li>
                <li>🧩 Proyecto escolar destacado</li>
              </ul>

              <div className="hero-actions">
                <a className="primary" href="#contacto">
                  Pedir demo / repo
                </a>
                <a className="ghost" href="#proyectos">
                  Ver otros
                </a>
              </div>
            </div>

            <div className="signai-card big">
              <p className="signai-title">Sign AI · Mobile</p>
              <p className="signai-sub">React Native / Expo</p>
              <div className="signai-chip">Proyecto escolar</div>

              <div className="signai-phone">
                <div className="screen-top"></div>
                <div className="screen-body">
                  <p className="phone-title">Sign AI</p>
                  <p className="phone-sub">Pantalla principal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen grande del proyecto */}
          <div className="signai-image-container">
            <img
              src={sImage}
              alt="Captura del proyecto Sign AI"
              className="signai-image"
            />
            <p className="signai-caption">
              Interfaz principal del proyecto Sign AI · React Native / Expo
            </p>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section">
          <div className="section-header row-header">
            <h2>Contacto</h2>
            <span className="muted-small">
              Para prácticas, proyectos o escuela
            </span>
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Gracias por escribir 👌");
            }}
          >
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
            <textarea rows="4" placeholder="Mensaje..." />
            <button className="primary" type="submit">
              Enviar
            </button>
          </form>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <p>© 2025 · Portfolio de Tomás Grinstein · ORT · 5º TIC</p>
          <p>Hecho con React + Vite · Foto PNG incluida 🎨</p>
        </footer>
      </main>
    </div>
  );
}

export default App;

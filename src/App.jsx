// App.jsx
// Portfolio profesional – Tomás Grinstein
<<<<<<< HEAD
=======

import profilePic from "./assets/profile.png";
import sImage from "./assets/s.JPG";
import aquilaLogo from "./assets/a.png";
>>>>>>> 7e6746af76b95265d775ee4c096fcdfe0b704d87

const PROJECTS = [
  {
    title: "Sign AI (mobile)",
    desc: "UI en React Native / Expo para práctica de lenguaje de señas.",
    stack: ["React Native", "Expo", "Mobile UI"],
  },
  {
<<<<<<< HEAD
    title: "Gestor de tareas ORT",
    desc: "App web rápida para organizar materias y entregas.",
    stack: ["React", "JS"],
=======
    title: "Co-founder de Soluciones Áquila",
    desc: (
      <>
        Proyecto/emprendimiento tecnológico que fundamos con{" "}
        <strong>Benjamín Piccagli, Federico Díaz Nemeth, Borja Izurieta</strong> y{" "}
        <strong>Maximiliano Setton</strong>. La idea es usar software y productos
        digitales para resolver problemas reales de la gente con soluciones
        simples, útiles y escalables.
        <div className="aquila-logo">
          <img src={aquilaLogo} alt="Logo Soluciones Áquila" />
        </div>
      </>
    ),
    stack: ["Emprendimiento", "Equipo", "Producto"],
>>>>>>> 7e6746af76b95265d775ee4c096fcdfe0b704d87
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
<<<<<<< HEAD
            <h1>
              Hola, soy <span className="grad-text">Tomás Grinstein</span>
            </h1>
            <p className="hero-sub">
              Estudiante de TIC en ORT. Me gusta programar, trabajar en equipo y
              mejorar procesos. Experiencia administrativa en{" "}
              <strong>Diaxos</strong>. Mi objetivo: estudiar Ingeniería Industrial.
            </p>
            <div className="hero-actions">
=======

            <h1 className="hero-title fade-in">
              Hola, soy <span className="grad-text">Tomás Grinstein</span>
            </h1>

            <p className="hero-sub fade-in-delayed">
              Un curioso incansable que combina <strong>lógica</strong> y{" "}
              <strong>creatividad</strong>. <br />
              Me apasiona entender cómo funcionan las cosas, programarlas y
              mejorarlas. <br />
              Estudio <strong>TIC en ORT</strong>, trabajo en{" "}
              <strong>Diaxos</strong> y me preparo para estudiar{" "}
              <strong>Ingeniería Industrial</strong>. <br />
              Si algo me define, es la búsqueda constante de{" "}
              <strong>aprender</strong> y <strong>crear con propósito</strong>.
            </p>

            <div className="hero-actions fade-in-delayed">
>>>>>>> 7e6746af76b95265d775ee4c096fcdfe0b704d87
              <a className="primary big" href="#proyectos">
                Ver mis proyectos
              </a>
              <a className="ghost" href="#signai">
                Ver Sign AI
              </a>
            </div>
<<<<<<< HEAD
            <div className="hero-tags">
              <span>React / Vite</span>
              <span>React Native</span>
              <span>Trabajo en equipo</span>
              <span>Procesos</span>
=======

            <div className="hero-tags fade-in-delayed">
              <span>React / Vite</span>
              <span>React Native</span>
              <span>Innovación</span>
              <span>Trabajo en equipo</span>
>>>>>>> 7e6746af76b95265d775ee4c096fcdfe0b704d87
            </div>
          </div>

          <div className="hero-right">
            <div className="photo-card">
              <img
<<<<<<< HEAD
                src="/profile.png"
=======
                src={profilePic}
>>>>>>> 7e6746af76b95265d775ee4c096fcdfe0b704d87
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
<<<<<<< HEAD
        <section id="proyectos" className="section">
          <div className="section-header row-header">
            <h2>Proyectos</h2>
            <span className="muted-small">
              Algunos proyectos escolares y personales
            </span>
          </div>

          <div className="grid projects-pro">
            {PROJECTS.map((proj) => (
              <article key={proj.title} className="card card-pro">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="tags">
                  {proj.stack.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="linkbtn">Ver →</button>
=======
        <section id="proyectos" className="section projects-section">
          <div className="section-header row-header">
            <h2>Proyectos</h2>
            <span className="muted-small">
              Trabajos reales de la escuela, team y prácticas personales
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
>>>>>>> 7e6746af76b95265d775ee4c096fcdfe0b704d87
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
<<<<<<< HEAD
          </div>

          <div className="signai-box colorful">
            <div>
              <h3>App mobile de accesibilidad</h3>
              <p>
                Proyecto pensado para practicar diseño de interfaces mobile,
                navegación con Expo Router y accesibilidad. Pantallas:
                home, login, menú inferior y módulo de práctica.
              </p>

              <ul className="signai-list">
                <li>⚡ React Native + Expo</li>
                <li>📱 Diseño limpio y moderno</li>
                <li>🧩 Pensado para colegio / portfolio</li>
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

=======
          </div>

          <div className="signai-box colorful">
            <div>
              <h3>App mobile de accesibilidad</h3>
              <p>
                Proyecto pensado para practicar diseño de interfaces mobile,
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
        <section id="contacto" className="section contacto-section">
          <div className="section-header row-header">
            <h2>Contacto</h2>
            <span className="muted-small">
              Para prácticas, proyectos o escuela
            </span>
          </div>

          <div className="contact-wrapper">
            {/* FORM */}
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

            {/* LINKS */}
            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/tomas-ceferino-grinstein-lavagnino"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card linkedin"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                />
                <div>
                  <h4>LinkedIn</h4>
                  <p>Tomás Ceferino Grinstein Lavagnino</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/soluciones-aquila"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card aquila"
              >
                <img src={aquilaLogo} alt="Logo Soluciones Áquila" />
                <div>
                  <h4>Soluciones Áquila</h4>
                  <p>Equipo tecnológico · Innovación</p>
                </div>
              </a>
            </div>
          </div>
        </section>

>>>>>>> 7e6746af76b95265d775ee4c096fcdfe0b704d87
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

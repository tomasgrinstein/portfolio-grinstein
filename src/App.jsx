// App.jsx
const PROJECTS = [
  {
    title: "Sign AI (mobile)",
    desc: "UI en React Native / Expo para práctica de lenguaje de señas.",
    stack: ["React Native", "Expo", "Mobile UI"],
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
      <header className="topbar glass">
        <div className="brand">tomasgrinstein.dev</div>
        <nav className="topnav">
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#signai">Sign AI</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="topbtn" href="#contacto">Hablemos</a>
      </header>

      <main className="content" id="inicio">
        {/* HERO */}
        <section className="hero-modern">
          <div className="hero-left">
            <span className="hero-badge">ORT · 5º TIC · 2025</span>
            <h1>
              Hola, soy <span className="grad-text">Tomás Grinstein</span>
            </h1>
            <p className="hero-sub">
              Estudiante de TIC en ORT. Me gusta programar, trabajar en equipo y
              mejorar procesos. Experiencia administrativa en{" "}
              <strong>Diaxos</strong>. Mi objetivo: estudiar Ingeniería Industrial.
            </p>
            <div className="hero-actions">
              <a className="primary big" href="#proyectos">Ver mis proyectos</a>
              <a className="ghost" href="https://signin.ar" target="_blank" rel="noreferrer">
                Ver Sign AI
              </a>
            </div>
            <div className="hero-tags">
              <span>React / Vite</span>
              <span>React Native</span>
              <span>Trabajo en equipo</span>
              <span>Procesos</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="photo-card">
              <img
                src="/profile.png"
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
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <button className="linkbtn">Ver →</button>
              </article>
            ))}
          </div>
        </section>

        {/* SIGN AI */}
        <section id="signai" className="section signai">
          <div className="section-header row-header">
            <h2>Sign AI</h2>
            <span className="muted-small">Proyecto destacado (React Native)</span>
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
                <a className="primary" href="https://signin.ar" target="_blank" rel="noreferrer">
                  Visitar Sign AI
                </a>
                <a className="ghost" href="#proyectos">Ver otros</a>
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
            <span className="muted-small">Para prácticas, proyectos o escuela</span>
          </div>

          <div className="contact-layout">
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
              <button className="primary" type="submit">Enviar</button>
            </form>

            <aside className="socials-panel socials-mini">
              <h3 className="mini-title">Redes</h3>
              <p className="muted-small">Conectemos también por acá</p>

              <div className="socials-list">
                <a
                  className="social-item is-ln"
                  href="https://www.linkedin.com/in/tomas-ceferino-grinstein-lavagnino"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="dot dot-ln"></span>
                  <span>LinkedIn</span>
                  <span className="arrow">↗</span>
                </a>

                <a
                  className="social-item is-signin"
                  href="https://signin.ar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="dot dot-signin"></span>
                  <span>signin.ar</span>
                  <span className="arrow">↗</span>
                </a>
              </div>
            </aside>
          </div>
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

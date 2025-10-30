// App.jsx
// Portfolio de Sebastián Grinstein

const PROJECTS = [
  {
    title: "Sign AI · Frontend",
    desc: "App móvil en React Native / Expo para lenguaje de señas.",
    stack: ["React Native", "Expo"],
  },
  {
    title: "Rompamos el Hielo",
    desc: "Branding y piezas para streaming.",
    stack: ["Diseño", "Figma"],
  },
  {
    title: "Itinerarios Europa",
    desc: "Docs claros para viaje familiar.",
    stack: ["Docs", "UX"],
  },
];

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">sg.dev</div>
        <nav className="topnav">
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="topbtn" href="#contacto">
          Hablemos
        </a>
      </header>

      <main className="content" id="inicio">
        <section className="hero">
          <p className="pill">Disponible · 2025</p>
          <h1>
            Hola, soy <span className="accent">Sebastián</span> 👋
          </h1>
          <p className="lead">
            Hago cosas en React / React Native (Sign AI), diseño para radio y
            armo docs claros. Este es mi portfolio.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#proyectos">
              Ver proyectos
            </a>
            <a className="ghost" href="#contacto">
              Escribime
            </a>
          </div>
        </section>

        <section id="proyectos" className="section">
          <div className="section-header">
            <h2>Proyectos destacados</h2>
            <p>Algunas cosas que hice.</p>
          </div>
          <div className="grid">
            {PROJECTS.map((proj) => (
              <article key={proj.title} className="card">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="tags">
                  {proj.stack.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="linkbtn">Ver más →</button>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="section">
          <div className="section-header">
            <h2>Contacto</h2>
            <p>¿Querés algo así? Mandá tu mail.</p>
          </div>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Gracias, Seba 👌");
            }}
          >
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
            <textarea rows="4" placeholder="Contame..." />
            <button className="primary" type="submit">
              Enviar
            </button>
          </form>
        </section>

        <footer className="footer">
          <p>© 2025 · Portfolio de Sebastián Grinstein.</p>
          <p>Trabajo práctico – React – Materia: __________.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;

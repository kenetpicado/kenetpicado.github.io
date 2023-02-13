import { Card } from "./components/Card";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { NavItem } from "./components/NavItem";
import { Section } from "./components/Section";
import { LinkLi } from "./components/LinkLi";

function AppUI() {
  return (
    <>
      <Navbar title="K">
        <NavItem href="/" title="Inicio"></NavItem>
      </Navbar>

      <Container>
        <div className="mb-4">
          <h1 className="fw-bolder">Kenet Picado R.</h1>
          <small className="text-muted">Desarrollador Web</small>
        </div>

        <Section title="Acerca de">
          <p>
            Ingeniero en Telemática y Desarrollador Web con experiencia en el
            desarollo de aplicaciones con{" "}
            <a href="https://laravel.com/">Laravel. </a>
            Además de tecnologias para el desarrollado frontend como{" "}
            <strong>React.js</strong> y <strong>Vue.js. </strong>
            <br />
            En este sitio podrás ver parte de mis trabajos.
          </p>
        </Section>

        <Section title="Proyectos">
          <Card
            title="Sistema de Administración de Gimnasios"
            img="alonso"
            technology="Laravel - Livewire"
          >
            Como su nombre lo indica, esta herramienta es la opción perfecta,
            completa y profesional para la gestión de gimnasios. Su principal
            característica es la simpleza y precisión al guardar, obtener y
            generar información para su posterior análisis.
            <div class="alert alert-primary small my-3" role="alert">
              Actualmente presta servicios para Alonso Gym - León, Nic.
            </div>
          </Card>
          <Card title="Red León" img="rl" technology="Laravel">
            Sistema desarrollado para una empresa privada que ofrece diferentes
            servicios en el área de las telecomunicaciones. El sistema pretende
            una efectiva administración y gestión de la información relacionada
            con datos personales de los usuarios, planes contratados, tipos de
            servicios ofertados, alertas para planes vencidos, la información
            general del servicio y el registro de todos los ingresos que los
            servicios conllevan.
          </Card>
          
          <Card title="donut (Frontend)" img="donut" technology="Vue.js">
            Herramienta dirigida a los estudiantes de la Universidad Nacional
            Autónoma de Nicaragua - León, su objetivo mejorar la experiencia de
            usuario al realizar consulta de calificaciones proporcionando una
            interfaz, simple, intuitiva, amigable y adaptable a cualquier
            dispositivo.
            <LinkLi
              label="Puedes visitarlo en el siguiente enlace:"
              text="donut-notasunan.tk"
              link="donut-notasunan.tk"
            />
          </Card>
          <Card title="donut (API)" img="donutapi" technology="Laravel">
            Ya que no se cuenta con una API oficial, he construido una propia
            empleando los principios de Web Scraping, con el fin de obtener la
            información del estudiante y sus calificaciones en un formato que me
            permita manipularla.
            <br />
            De esa forma es posible utilizar el mismo endpoint para una
            aplicación móvil o bien cualquier otra tecnología para frontend que
            permita hacer una petición y obtener la información en formato JSON.
          </Card>
          <Card title="Roseh Store" img="store" technology="Laravel - Livewire">
            Sistema construido para la administración de Roseh Store, tienda
            ubicada en León, Nic. Con el objetivo de gestionar el inventario de
            una forma eficiente, simple, eficaz e intuitiva, además poder
            controlar todos los flujos contables de la tienda.
          </Card>
          <Card title="StudentPage" img="sp" technology="Laravel">
            Sistema web dirígido a colegios privados que ofrecen cursos
            técnicos. Este sistema cubre todos los sectores, desde el área
            admnistrativa hasta consulta de notas, con el fin de proporcionar
            información íntegra y rápida en todo momento.
            <LinkLi
              label="Puedes visitarlo en el siguiente enlace:"
              text="studentpage.ml"
              link="studentpage.ml"
            />
          </Card>
        </Section>

        <div className="mb-4">
          <p>
            Esto son algunos de mis trabajos más importantes, si quieres ver más
            te invito a visitar mi perfil en GitHub. 😉️
          </p>
          <p className="text-muted small">
            Este sitio esta construido con React
          </p>
        </div>

        <Section title="Contacto">
          <ul>
            <li>Correo: kenetpicado1@gmail.com</li>
            <li>Celular: +505 8600 6856</li>
            <LinkLi
              label="GitHub:"
              text="kenetpicado"
              link="github.com/kenetpicado"
            />
            <LinkLi
              label="LinkedIn:"
              text="kenetpicado"
              link="linkedin.com/in/kenetpicado"
            />
          </ul>
        </Section>
      </Container>
    </>
  );
}

export default AppUI;

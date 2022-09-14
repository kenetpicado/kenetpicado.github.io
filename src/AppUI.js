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
          <small className="text-muted">
            Ingeniero en Telemática | Desarrollador Web
          </small>
        </div>

        <Section title="Acerca de">
          <p>
            Ingeniero en Telemática y Desarrollador Web con vasta experiencia en
            el desarollo de aplicaciones con{" "}
            <a href="https://laravel.com/">Laravel. </a>
            En este sitio podrás ver parte de mis trabajos.
          </p>
        </Section>

        <Section title="Proyectos">
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
          <Card title="Red León" img="rl" technology="Laravel">
            Sistema desarrollado para una empresa privada que ofrece diferentes
            servicios en el área de las telecomunicaciones. El sistema pretende
            una efectiva administración y gestión de la información relacionada
            con datos personales de los usuarios, planes contratados, tipos de
            servicios ofertados, alertas para planes vencidos, la información
            general del servicio y el registro de todos los ingresos que los
            servicios conllevan.
          </Card>
          <Card title="donut" img="d" technology="Laravel">
            Herramienta dirigida a los estudiantes de la Universidad Nacional
            Autónoma de Nicaragua - León, su objetivo mejorar la experiencia de
            usuario al realizar consulta de calificaciones proporcionando una
            interfaz, simple, intuitiva, amigable y adaptable a cualquier
            dispositivo. Además, es posible realizar dicha consulta en un rango
            de años específicos determinados por el usuario y de ese modo
            proporcionar un resultado más conveniente, funcionalidad de la que
            carece el{" "}
            <a
              href="https://portalestudiantes.unanleon.edu.ni/consulta_estudiantes.php"
              target="_blank"
              rel="noreferrer"
            >
              sitio oficial.
            </a>
            <LinkLi
              label="Puedes visitarlo en el siguiente enlace:"
              text="cb-develop.tk"
              link="cb-develop.tk"
            />
          </Card>
          <Card
            title="Sistema de Administración de Gimnasios"
            img="alonso"
            technology="Laravel"
          >
            Como su nombre lo indica, esta herramienta es la opción perfecta,
            completa y profesional para la gestión de gimnasios. Su principal
            característica es la simpleza y precisión al guardar, obtener y
            generar información para su posterior análisis.
          </Card>
        </Section>

        <div className="mb-4">
          <p className="text-muted">Este sitio esta construido con React</p>
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

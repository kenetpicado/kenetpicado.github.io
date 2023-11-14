<template>
  <div>
    <Navbar title="K">
      <NavItem href="/" title="Inicio"></NavItem>
    </Navbar>

    <Container>
      <div class="mb-4">
        <h1 class="fw-bolder">Kenet Picado R.</h1>
        <small class="text-muted">Desarrollador Web</small>
      </div>

      <Section title="Acerca de">
        Ingeniero en Telemática y Desarrollador Web con experiencia en el
        desarollo de aplicaciones con Laravel, además de tecnologias para el desarrollado frontend como
        <strong>Vue.js. </strong>
        <br />
        En este sitio podrás ver parte de mis trabajos.
      </Section>

      <Section title="Proyectos">
        <Card title="Gymtonic" images="alonso" technology="Laravel - Inertia">
          Aplicación diseñada para la administración eficiente de un gimnasio. Permite gestionar
          clientes, planes de membresía, así como el registro detallado de ingresos, egresos y otros aspectos relevantes
          para el funcionamiento diario del gimnasio. Con una interfaz intuitiva, esta aplicación simplifica la gestión y
          organización de datos cruciales para el negocio.
          <div class="alert alert-primary small my-3" role="alert">
            Actualmente presta servicios para <a class="text-decoration-none"
              href="https://www.facebook.com/profile.php?id=100058005356664" target="_blank">Alonso Gym - León, Nic.</a>
          </div>
        </Card>

        <Card title="Dashboard - POS" images="pos" technology="Laravel - Inertia">
          <div>
            Este sistema de gestión de inventario y ventas en Laravel es una potente solución para simplificar y optimizar
            la gestión de tu inventario, ventas y transacciones. Con una interfaz de usuario intuitiva y un conjunto de
            características robustas, te permite tomar el control completo de tus operaciones comerciales.
          </div>

          <div class="my-3">
            Características Destacadas:
          </div>

          <ul>
            <li>Registro detallado de productos, categorías y transacciones.</li>
            <li>Control preciso del inventario.</li>
            <li>Gestión de ventas con seguimiento de facturas y pagos.</li>
            <li>Funciones de compra y recepción de productos.</li>
          </ul>

          <div class="alert alert-primary small my-3" role="alert">
            Actualmente presta servicios para <a class="text-decoration-none" href="https://www.facebook.com/roseh.nic"
              target="_blank">Roseh
              Boutique</a>
          </div>
        </Card>

        <Card title="Dashboard - POS (Catálogo)" images="cat" technology="Laravel - Inertia">
          Con el fin de proporcionarle una mejor experiencia a los clientes de la tienda, se ha construido un catálogo de
          productos que permite una navegación rápida y sencilla.
          <div class="alert alert-primary small my-3" role="alert">
            Puedes visitarlo <a class="text-decoration-none" href="https://rosehboutique.com" target="_blank">aqui</a>
          </div>
        </Card>

        <Card title="CLickAsh" images="luck" technology="Laravel - Inertia">
          <p>Un sistema web integral diseñado para la gestión eficiente de vendedores, transacciones y el seguimiento de
            rifas. Este sistema proporciona a los usuarios una plataforma centralizada para supervisar y optimizar todas
            las
            actividades relacionadas con la gestión de vendedores y el registro de resultados de rifas.
          </p>
          <p>
            La plataforma está diseñada con un enfoque en la facilidad de uso y la accesibilidad, lo que la convierte en
            una herramienta valiosa para empresas de todos los tamaños que gestionan vendedores y desean llevar un
            seguimiento
            de las rifas sin ejecutar los sorteos en sí mismos. La visualización de datos en tiempo real y la generación
            de
            informes detallados proporcionan información crucial para la toma de decisiones y la evaluación del desempeño.
          </p>
          <div class="alert alert-primary small my-3" role="alert">
            <a class="text-decoration-none"
              href="https://play.google.com/store/apps/details?id=com.codein.donut&pcampaignid=web_share" target="_blank">
              Descarga
            </a> la app y registrate!
          </div>
        </Card>

        <Card title="donut" images="donut" technology="Laravel - Inertia">
          Interfaz diseñada para mejorar la experiencia de los estudiantes de la Universidad Nacional Autónoma de
          Nicaragua - León al consultar sus calificaciones. Con esta aplicación, los estudiantes pueden acceder de manera
          rápida y sencilla a sus notas académicas.

          Caracterizada por una interfaz intuitiva y amigable, donut ofrece una experiencia de usuario optimizada para
          dispositivos móviles, permitiendo a los estudiantes acceder a sus calificaciones en cualquier momento y lugar,
          desde la comodidad de sus teléfonos inteligentes.

          donut se basa en tecnologías web modernas, lo que garantiza su accesibilidad y compatibilidad con diferentes
          dispositivos y navegadores.

          <div class="alert alert-primary small my-3" role="alert">
            Puedes visitarlo <a class="text-decoration-none" href="https://donut.strain-team.com" target="_blank">aqui</a>
            o descarga la app desde <a class="text-decoration-none"
              href="https://play.google.com/store/apps/details?id=com.codein.donut&pcampaignid=web_share" target="_blank">
              PlayStore!
            </a>
          </div>
        </Card>
      </Section>

      <div class="mb-4">
        Esto son algunos de mis trabajos más importantes, si quieres ver más
        te invito a visitar mi perfil en GitHub. 😉️
      </div>

      <Section title="Contacto">
        <ul>
          <li>Correo: kenetpicado1@gmail.com</li>
          <li>Celular: +505 8600 6856</li>
          <li>
            <a href="https://www.github.com/kenetpicado" target="_blank">GitHub</a>
          </li>
        </ul>
      </Section>
    </Container>

  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import NavItem from './components/NavItem.vue';
import Container from './components/Container.vue';
import Section from './components/Section.vue';
import Card from './components/Card.vue';

</script>
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { lazy, Suspense } from "react";

const NavBar = lazy(() => import("./components/navbarComponent"));
const Hero = lazy(() => import("./components/heroComponent"));
const Intro = lazy(() => import("./components/introComponent"));
const Advantages = lazy(() => import("./components/advantagesComponent"));
const Services = lazy(() => import("./components/servicesComponent"));
const Functionalities = lazy(() =>
  import("./components/functionalitiesComponent")
);
const Architecture = lazy(() => import("./components/architectureComponent"));
const Bottom = lazy(() => import("./components/bottomComponent"));
const Footer = lazy(() => import("./components/footerComponent"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <p className="placeholder col-12"></p>
          </div>
        }
      >
        <NavBar />
      </Suspense>
      <Suspense
        fallback={
          <div>
            <img
              src="https://www.talent-100.com.au/wordpress/wp-content/uploads/2016/08/video-placeholder.jpg"
              className="img-fluid"
              alt="hero-image"
              width="100%"
              height="auto"
            />
          </div>
        }
      >
        <Hero />
      </Suspense>
      <Suspense>
        <Intro />
      </Suspense>
      <Suspense>
        <Advantages />
      </Suspense>
      <Suspense>
        <Services />
      </Suspense>
      <Suspense>
        <Functionalities />
      </Suspense>
      <Suspense>
        <Architecture />
      </Suspense>
      <Suspense>
        <Bottom />
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>{" "}
    </>
  );
}

export default App;

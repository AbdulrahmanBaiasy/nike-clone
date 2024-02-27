import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality,
} from "./sections";

import Nav from "./components/Nav";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b  ">
        <Hero />
      </section>

      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding-x padding-y-1 ">
        <Services />
      </section>

      <section className="bg-pale-blue padding mt-5">
        <CustomerReviews />
      </section>
      <section className="sm:py-32 p-16 w-full padding-x">
        <Subscribe />
      </section>

      <section className="bg-black padding-t padding-x pb-8 ">
        <Footer />
      </section>
    </main>
  );
};
export default App;

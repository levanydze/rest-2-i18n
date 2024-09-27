import NotFoundComponent from "@/src/components/Error-NotFound/notFound/NotFoundComponent";

// must fix metadata

export default function error() {
  return (
    <section className="section">
      <div className="container">
        <NotFoundComponent />
        <h6 className="heading5 color1"></h6>
      </div>
    </section>
  );
}

import { Header } from "src/component/Header";
import { Footer } from "src/component/Footer";

export const Layout = (props) => {
  return (
    <div className="font-sans text-base">
      <Header />

      <main className="h-screen w-4/5 mr-auto ml-auto">
        {props.input ? props.input : null}
        {props.button ? props.button : null}
        {props.h2}
        {props.ul}
      </main>

      <Footer />
    </div>
  );
};

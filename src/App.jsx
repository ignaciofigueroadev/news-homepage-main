import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import LatestNews from "./components/LatestNews/LatestNews";
import Footer from "./components/Footer/Footer";
import "../src/global.scss";

function App() {
  return (
    <>
      <Header />
      <Main />
      <LatestNews />
      <Footer />
    </>
  );
}

export default App;

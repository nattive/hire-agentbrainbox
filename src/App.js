import logo from "./logo.svg";
import "./App.css";
import AppRoute from "./Pages/Main/AppRoute";
import store from "./Constants/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./Assets/css/bootstrap.min.css";
// import "./Assets/css/owl.carousel.min.css";
import "./Assets/css/flaticon.css";
import "./Assets/css/price_rangs.css";
import "./Assets/css/slicknav.css";
import "./Assets/css/animate.min.css";
import "./Assets/css/magnific-popup.css";
import "./Assets/css/fontawesome-all.min.css";
import "./Assets/css/themify-icons.css";
import "./Assets/css/slick.css";
import "./Assets/css/nice-select.css";
import "./Assets/css/style.css";
import "./Assets/css/custom.css";
import "semantic-ui-css/semantic.min.css";
import "rsuite/dist/styles/rsuite-default.css";
import Footer from "./Partials/Footer";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ minHeight: window.innerHeight }}>
          <AppRoute />
        </div>
        <div className="clear"></div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;

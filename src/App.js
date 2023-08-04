import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

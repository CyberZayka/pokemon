import React, {useEffect} from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {useDispatch} from "react-redux";
import saveAllCards from "./store/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("db.json")
    .then(res => res.json())
    .then(data => dispatch(saveAllCards(data)));
  }, [dispatch]);

  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;

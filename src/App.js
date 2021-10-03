import './App.css';
import Header from './components/header/Header';
import Section from './components/section1/Section';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">

      <Header color={"black"} />
      <Section subTitle={"RECENT LAUNCH"} title={"TRANSPORTER-2 MISSION"} content={""} className={"section1"} />
      <Section subTitle={"RECENT LAUNCH"} title={"TRANSPORTER-2 MISSION"} content={""} className={"section2"} />
      <Section subTitle={"COMPLETED MISSION"} title={"TDRAGON RETURNS TO EARTH"} content={"After 167 days, Dragon completes its first long-duration mission."} className={"section3"} />
      <Section subTitle={"RECENT LAUNCH"} title={"STARLINK MISSION"} content={""} className={"section4"} />
      <Section subTitle={""} title={"STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON"} content={""} className={"section5"} />

      <Footer />
    </div>
  );
}

export default App;

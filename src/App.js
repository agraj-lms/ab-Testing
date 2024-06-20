import "./App.css";
import CardList from "./CardList";
import Footer from "./Footer";
import Navbar from "./Navbar";
const cards = [
  {
    title: "Card 1",
    description: "This is the description for card 1.",
    imageUrl:
      "https://twingalaxies-lms-dev.s3.us-west-1.amazonaws.com/wall/23976/images%20%281%29.jpg",
  },
  {
    title: "Card 2",
    description: "This is the description for card 2.",
    imageUrl:
      "https://twingalaxies-lms-dev.s3.us-west-1.amazonaws.com/wall/23976/images%20%281%29.jpg",
  },
  {
    title: "Card 3",
    description: "This is the description for card 3.",
    imageUrl:
      "https://twingalaxies-lms-dev.s3.us-west-1.amazonaws.com/wall/23976/images%20%281%29.jpg",
  },
  {
    title: "Card 1",
    description: "This is the description for card 1.",
    imageUrl:
      "https://twingalaxies-lms-dev.s3.us-west-1.amazonaws.com/wall/23976/images%20%281%29.jpg",
  },
  {
    title: "Card 2",
    description: "This is the description for card 2.",
    imageUrl:
      "https://twingalaxies-lms-dev.s3.us-west-1.amazonaws.com/wall/23976/images%20%281%29.jpg",
  },
  {
    title: "Card 1",
    description: "This is the description for card 1.",
    imageUrl:
      "https://twingalaxies-lms-dev.s3.us-west-1.amazonaws.com/wall/23976/images%20%281%29.jpg",
  },
  {
    title: "Card 2",
    description: "This is the description for card 2.",
    imageUrl:
      "https://twingalaxies-lms-dev.s3.us-west-1.amazonaws.com/wall/23976/images%20%281%29.jpg",
  },
  {
    title: "Card 3",
    description: "This is the description for card 3.",
    imageUrl:
      "https://twingalaxies-lms-dev.s3.us-west-1.amazonaws.com/wall/23976/images%20%281%29.jpg",
  },
  {
    title: "Card 1",
    description: "This is the description for card 1.",
    imageUrl:
      "https://twingalaxies-lms-dev.s3.us-west-1.amazonaws.com/wall/23976/images%20%281%29.jpg",
  },
  {
    title: "Card 2",
    description: "This is the description for card 2.",
    imageUrl:
      "https://twingalaxies-lms-dev.s3.us-west-1.amazonaws.com/wall/23976/images%20%281%29.jpg",
  },

  // Add more cards as needed
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardList cards={cards} />
      <Footer />
    </div>
  );
}

export default App;

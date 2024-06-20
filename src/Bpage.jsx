import CardList from "./CardList";
import Navbar from "./Navbar";
import { cards } from "./constant";

const Bpage = () => {
  return (
    <>
      <CardList cards={cards} />
    </>
  );
};

export default Bpage;

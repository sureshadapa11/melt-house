import MenuShelf from "./MenuShelf";
import { coffees } from "../content";

export default function CoffeeSection() {
  return <MenuShelf id="coffee" menu={coffees} />;
}

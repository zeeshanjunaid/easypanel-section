import Card from "./components/card";
import Sidebar from "./components/sidebar";
import { cardsData } from "./data/cards";
import { navItems } from "./data/nav";

function App() {
  return (
    <div className="bg-white min-h-screen py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 flex gap-x-6">
        <Sidebar navItems={navItems} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {cardsData.map((cardItem) => (
            <Card cardItem={cardItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

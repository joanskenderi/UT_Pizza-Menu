import { Pizza } from '../components';
import { MENU_ITEMS } from '../data';

const Menu = () => {
  const items = MENU_ITEMS;
  const itemsNumber = items.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {itemsNumber > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {MENU_ITEMS.map((pizza) => (
              <Pizza key={pizza.name} pizza={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We&apos;re still working on our menu. Please come back later.</p>
      )}
    </main>
  );
};

export default Menu;

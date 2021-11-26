import React, { useState } from 'react';
import "./menu.css";
import MenuCard from './MenuCard';
import Categories from './Categories';
import itemsStr from './data';

const parsedItems = JSON.parse(itemsStr)

const allCategories = ['all', ...new Set(parsedItems.map((item) => item.Cruisine))];

function Menu() {
  const [menuItems, setMenuItems] = useState(parsedItems);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(parsedItems);
      return;
    }
    const newItems = parsedItems.filter((item) => item.Cruisine === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} data-aos="zoom-in-up" />
        <MenuCard items={menuItems} />
      </section>
    </main>
  );
}

export default Menu

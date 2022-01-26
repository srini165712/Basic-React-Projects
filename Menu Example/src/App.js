import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  
  const [menuitem, setmenuitem] = useState(items);
  
  function onlyUnique(value,index,self){
    return self.indexOf(value) === index;
  }

  const getcategory = () =>{
    var categorynames = [];
    items.filter(item => {
      categorynames.push(item.category);
    })
    categorynames = categorynames.filter(onlyUnique);
    return categorynames;
  }

  const categorynames = getcategory();
  
  const filteritems  = (category)=>{
    if (category === undefined){
      setmenuitem(items);
    } 
    else{  
    const newitems = items.filter((item)=>item.category === category)
      setmenuitem(newitems)
    }
  }
  
  return (
    <main>
      <section className= 'menu section'>
        <div className = 'title'>
          <h2>Menu</h2>
          <div className = 'underline'></div>
        </div>
        <Categories filteritems = {filteritems} categorynames={categorynames}></Categories>
        <Menu items = {menuitem}></Menu>
      </section>
    </main>
  );;
}

export default App;

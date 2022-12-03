// https://beta.reactjs.org/learn/sharing-state-between-components
/*
import React, { useState } from 'react';
import Panel from './Panel';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Panel
        title='1st day'
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        1st day, learning react
      </Panel>
      <Panel
        title='2nd day'
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        2nd day, in love with react
      </Panel>
      <Panel
        title='3rd day'
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        3rd day, getting better with react
      </Panel>
    </>
  );
};

export default App;
*/

/*
import React, { useState } from 'react';

export default App;

const Input = ({ label, value, onChange }) => {
  return (
    <>
      <span>{label}: </span>
      <input type='text' value={value} onChange={onChange} />
    </>
  );
};

const App = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Input label='First input' value={text} onChange={handleChange} />
      <Input label='Second input' value={text} onChange={handleChange} />
    </>
  );
};
*/

/*
import React, { useState } from 'react';
import { foods, filterItems } from './data.js';

const SearchBar = ({ query, onChange }) => {
  return (
    <label>
      <input
        type='text'
        placeholder='Search'
        value={query}
        onChange={onChange}
      />
    </label>
  );
};

const List = ({ items }) => {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const [query, setQuery] = useState('');
  const results = filterItems(foods, query);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <List items={results} />
    </>
  );
};

export default App;
*/

// https://beta.reactjs.org/learn > Updating the screen (complete, move to next steps)
/*
import React, { useState } from 'react';

const MyButton = ({ count, onClick }) => {
  return <button onClick={onClick}>No of clicked: {count}</button>;
};

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <h1>Total count: {count}</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <ul></ul>
    </>
  );
};

export default App;
*/

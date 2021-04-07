import React from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: 'What is React and Why You want to learn this',
        content: 'React is SPA framework and most popular framework nowadays'
    },
    {
        title: 'What is your job in Web development',
        content: 'My Job is front-end development'
    },
    {
        title: 'What is your favorite project',
        content: 'My most favorite is vim project, I love vim and I want to master vim as fast as I can'
    }
]

const options = [
    {
        label: 'super red',
        value: 'red'
    },
    {
        label: 'blue like ocean',
        value: 'blue'
    },
    {
        label: 'beautiful purple',
        value: 'purple'
    }
]

const App = () => {
    return (
        <div>
            {/*<Accordion items={items} />*/}
            {/*<Search />*/}
            <Dropdown options={options}/>
        </div>
    )
}

export default App;
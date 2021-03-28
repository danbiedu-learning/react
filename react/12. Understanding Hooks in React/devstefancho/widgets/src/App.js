import React from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search';

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

const App = () => {
    return (
        <div>
            {/*<Accordion items={items} />*/}
            <Search />
        </div>
    )
}

export default App;
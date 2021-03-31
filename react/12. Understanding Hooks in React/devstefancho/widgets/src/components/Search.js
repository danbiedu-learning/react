import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
    const [debouncedTerm, setDebouncedTerm] = useState(term);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (term) {
                setDebouncedTerm(term);
            }
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                },
            });

            setResults(data.query.search);
        };

        search();

    }, [debouncedTerm]);

    const onChangeTerm = (e) => {
        setTerm(e.target.value);
    };

    const renderedResult = results.map(result => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        target="_blank"
                    >
                        GO
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {parse(result.snippet)}
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="search">Enter Search Form</label>
                    <input type="text" className="input" id="search" onChange={onChangeTerm} value={term}/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResult}
            </div>
        </div>
    )
}

export default Search;
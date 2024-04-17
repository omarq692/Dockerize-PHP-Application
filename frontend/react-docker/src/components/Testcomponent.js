import React, { useState, useEffect } from 'react';

export default function MyComponent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:80/api/third_party_api.php')
            .then(response => response.json())
            .then(data => {
                const formattedData = data.map(item => ({
                    name: item.name,
                    family: item.family,
                    order: item.order,
                    genus: item.genus,
                    nutritions: item.nutritions
                }));

                setData(formattedData);
                setFilteredData(formattedData);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const displayData = filteredData.length ? filteredData : null;

    return (
        <div>
            <div>
                <h2>Search Fruits:</h2>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
            <h2>API Response:</h2>
            <div className="Result">
                {displayData ? (
                    displayData.map(item => (
                        <div key={item.name}>
                            <div>{`Name: ${item.name}`}</div>
                            <div>{`Family: ${item.family}`}</div>
                            <div>{`Order: ${item.order}`}</div>
                            <div>{`Genus: ${item.genus}`}</div>
                            <div>{`Nutrition:`}</div>
                            <div>{`  Calories: ${item.nutritions.calories}`}</div>
                            <div>{`  Fat: ${item.nutritions.fat}`}</div>
                            <div>{`  Sugar: ${item.nutritions.sugar}`}</div>
                            <div>{`  Carbohydrates: ${item.nutritions.carbohydrates}`}</div>
                            <div>{`  Protein: ${item.nutritions.protein}`}</div>
                            <hr />
                        </div>
                    ))
                ) : (
                    <div>No matching results found</div>
                )}
            </div>
        </div>
    );
}
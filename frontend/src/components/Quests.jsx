import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Quest from './Quest'; // Import your Quest component

function Quests() {
    const [quests, setQuests] = useState([]);

    useEffect(() => {
        const fetchQuests = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/quests');
                setQuests(response.data);
            } catch (error) {
                console.error('Error fetching quests:', error);
            }
        };

        fetchQuests();
    }, []);

    return (
        <div className="quests box">
            {quests.map((quest) => (
                <Quest
                    key={quest.id}
                    title={quest.title}
                    description={quest.description}
                    reward={`${quest.reward} XP`}
                    percentage={50} // Default 50% for now, you can make it dynamic later
                />
            ))}
        </div>
    );
}

export default Quests;

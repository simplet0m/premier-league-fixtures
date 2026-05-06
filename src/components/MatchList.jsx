import { useEffect, useState } from "react";
import { getFixtures } from "../services/footballApi";
import MatchCard from "./MatchCard";

function MatchList() {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFixtures()
            .then(data => setMatches(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading fixtures...</p>;
    if (matches.length === 0) return <p>No upcoming Premier League fixtures.</p>;

    return (
        <div>
            {matches.map(match => (
                <MatchCard key={match.id} match={match} />
            ))}
        </div>
    );
}

export default MatchList;


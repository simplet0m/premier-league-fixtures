export default function MatchCard({ match }) {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "12px"
        }}>
            <strong>{match.homeTeam}</strong> vs <strong>{match.awayTeam}</strong>
            <div>{match.date}</div>
            <div style={{ fontSize: "0.9em", color: "#555" }}>

            </div>
        </div>
    );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTeamStore } from "../store/TeamStore";
import SausageSpinner from "./SausageSpinner";
import configuration from "./config.json"

type TeamType = { id: string, name: string }

function Team() {

  // const defaultTeam: TeamType = { id: "", name: "" };
  // const updateAmount = useTeamStore(state => state.updateTeams)
  const [teams, setTeams] = useState<TeamType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const selectedTeam = useTeamStore(state => state.team);
  const updateTeam = useTeamStore(state => state.updateTeam);
  //const [selectedTeam, setSelectedTeam] = useState<TeamType>({ id: "", name: "" });

  async function fetchData(): Promise<void> {
    setLoading(true);
    console.log("Start loading");
    try {
      const response = await fetch(`${configuration.API_URL}teams`);
      const teams = await response.json();
      setTeams(teams);
    }
    catch (error) {
      console.error(`An error occured retrieving data from backend: ${error}`)
    }
    finally {
      console.log("Finished loading");
      setLoading(false);
    }
  }

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value: string = event.target.value;
    const team: TeamType = teams.find(t => t.id === value) ?? selectedTeam;
    updateTeam(team);
    console.log(team);

  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <main>
      <h1>Team List</h1>
      <select onChange={selectChange}>
        <option> -- Please select a team --</option>
        {teams && teams.length > 0 && teams.map((team: TeamType) => (
          <option key={team.id} value={team.id}>{team.name}</option>
        ))}</select>
      {selectedTeam && (
        <Link to="/survey" state={{ team: selectedTeam }} ><button>To Survey</button></Link>
      )}
      {isLoading && (
        <SausageSpinner />
      )}
    </main>
  );
}

export default Team;
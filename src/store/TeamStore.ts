import {create} from 'zustand';

interface TeamType {
    id: string
    name : string
}

interface ITeam {
    team: TeamType
    updateTeam: (newTeam: TeamType) => void
}

export const useTeamStore = create<ITeam>((set) => ({
    team : {id: "", name: ""},
    updateTeam: (newTeam: TeamType) => set({team: newTeam})
}));
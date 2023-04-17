import { useEffect, useState } from "react"
import { useTeamStore } from "../store/TeamStore"

function Assessment() {
    
    interface SurveyItem {
        key: string
        value: number
    }

    interface IAssessment {
        average: number
        stage: string
        standardDeviation: number
        low: SurveyItem[]
        high: SurveyItem[]
    }

    const defaultAssessment : IAssessment = {
        average: 0,
        stage: "N/A",
        standardDeviation: 0,
        low: [],
        high: []
    }
    const [assessment, setAssessment] = useState<IAssessment>(defaultAssessment);
    const selectedTeam = useTeamStore(state => state.team);

    async function fetchAssessment() : Promise<void> {
        const response = await fetch(`https://jacob-team-check.azurewebsites.net/api/team-assessments?teamId=${selectedTeam.id}`)
        const data : IAssessment = await response.json();
        setAssessment(data);
    }

    useEffect(() => {
        fetchAssessment();
    }, [selectedTeam])
    
    return(
        <>
        {assessment.average && (
            <div>
                <span>Your team is {assessment.stage}</span>
            </div>
        )}
        </>
    )
}

export default Assessment
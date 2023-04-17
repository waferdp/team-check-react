import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Item from './Item'
import { useTeamStore } from '../store/TeamStore'

interface ICheckListItem {
    index: number
    key: string
    value: number
}

interface ISurvey {
    id: string
    created: Date,
    teamId: string
    items: ICheckListItem[]
}

function Survey() {

    const [checklist, setChecklist] = useState<string[]>([])
    const [form, setForm] = useState<{[key: number]: number}>({})
    const [isComplete, setIsComplete] = useState<boolean>(false);
    const selectedTeam = useTeamStore(state => state.team);

    const fetchData = async () => {
        const response = await fetch('performance_checklist.json');
        const data = await response.json();
        setChecklist(data);
      }
    
    function handleCallback(key: number, value: number, target: any) {
        form[key] = value;
        setForm(form);
        setIsComplete((Object.keys(form).length === checklist.length));
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    async function submitForm(): Promise<void> {
        const surveyData : ISurvey = {
            id: uuidv4(),
            created: new Date(),
            teamId: selectedTeam.id,
            items: Object.entries(form).map( ([key, value]): ICheckListItem =>   {
                return { 
                    index: Number(key), 
                    key: checklist[Number(key)],
                    value: value
                }})
        };
        const response = await fetch('https://jacob-team-check.azurewebsites.net/api/performance-checklists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
              },
              body: JSON.stringify(surveyData)
        });
        const data = await response.json()
        console.log(data);
    }

    return (
        <>
            <ul>
                {checklist && checklist.map((row: string, index: number) => (
                 <Item key={index} item={{index: index, text: row}} callback={handleCallback} />   
                ))}
            </ul>
            {isComplete && (
                <button type="submit" onClick={submitForm}>Submit</button>
            )}
        </>
    )
}

export default Survey
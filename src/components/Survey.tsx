import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Item from './Item'
import { useTeamStore } from '../store/TeamStore'
import configuration from './config.json'
import { Button, Col, ListGroup, Row } from 'react-bootstrap';

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
    const [form, setForm] = useState<{ [key: number]: number }>({})
    const [isComplete, setIsComplete] = useState<boolean>(false);
    const selectedTeam = useTeamStore(state => state.team);

    const fetchData = async () => {
        const response = await fetch('performance_checklist.json');
        const data = await response.json();
        setChecklist(data);
    }

    function handleCallback(key: number, value: number, target: any) {
        form[key] = value;
        console.log(`${key}: ${value}`)
        setForm(form);
        setIsComplete((Object.keys(form).length === checklist.length));
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function submitForm(): Promise<void> {
        const surveyData: ISurvey = {
            id: uuidv4(),
            created: new Date(),
            teamId: selectedTeam.id,
            items: Object.entries(form).map(([key, value]): ICheckListItem => {
                return {
                    index: Number(key),
                    key: checklist[Number(key)],
                    value: value
                }
            })
        };
        const response = await fetch(`${configuration.API_URL}performance-checklists`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(surveyData)
        });
        const data = await response.json()
    }

    return (
        <>
            <ListGroup>
                {checklist && checklist.map((element: string, index: number) => (
                    <Item key={index} index={index} text={element} callback={handleCallback} />
                ))}
            </ListGroup>
            {isComplete && (
                <Row>
                    <Col className="float-right" md={{ span: 2, offset: 10 }}>
                        <Button type="button" variant="primary">Submit</Button>
                    </Col>
                </Row>

            )}
        </>
    )
}

export default Survey
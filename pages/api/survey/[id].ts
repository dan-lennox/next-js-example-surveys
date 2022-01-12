import {NextApiRequest, NextApiResponse} from "next";

export type Survey = {
  id: number,
  name: string,
  details: string,
  participants: number,
  engagementScore: string
}

const dummySurveys: any = {
  1: {
    id: 1,
    name: 'Engagement 2021',
    details: 'Last minute effort to assess terrible engagement scores',
    participants: 1210,
    engagementScore: '10%'
  },
  2: {
    id: 2,
    name: 'Pulse Survey 2020',
    details: 'Final pulse survey of the year',
    participants: 200,
    engagementScore: '82%'
  },
  3: {
    id: 1,
    name: 'Employee awesomeness 2017',
    details: 'Collective measure of awesomeness',
    participants: 120,
    engagementScore: '75%'
  }
}

export default function getSurvey(
  req: NextApiRequest,
  res: NextApiResponse<Survey>
) {

  const surveyId = req.query.id;

  //const survey = fetch(`http://survey-microservice/survey/${surveyId}`)

  res.status(200).json(dummySurveys[surveyId])
}
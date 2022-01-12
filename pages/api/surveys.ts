import type { NextApiRequest, NextApiResponse } from 'next'

export type SurveyTeaser = {
  id: number,
  name: string,
}

export default function getSurveys(
  req: NextApiRequest,
  res: NextApiResponse<SurveyTeaser[]>
) {

  //const surveys = fetch('http://survey-microservice/surveys')

  const surveys = [
    {id: 1, name: 'Engagement 2021'},
    {id: 2, name: 'Pulse Survey 2020'},
    {id: 3, name: 'Employee awesomeness 2017'}
  ]

  res.status(200).json(surveys)
}


import type { NextPage } from 'next'
import axios from 'axios';
import { SurveyTeaser as SurveyTeaserType } from "./api/surveys";
import SurveyTeaser from '../components/SurveyTeaser';

type Props = {
  surveys: SurveyTeaserType[]
}

const Home: NextPage<Props> = ({ surveys }) => {
  return (
    <ul>
      { surveys.map(survey => <li key={survey.id}><SurveyTeaser survey={survey} /></li>) }
    </ul>
  )
}

// This renders this page once at build time.
export async function getStaticProps() {
  return {
    props: {
      surveys: (await axios.get('http://localhost:3000/api/surveys')).data,
      revalidate: 86400, // But then is set to refresh (rebuild only this page) once a day
    },
  }
}

export default Home

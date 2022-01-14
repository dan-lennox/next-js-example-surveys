import type { GetServerSidePropsContext, NextPage} from 'next'
import axios from 'axios';
import { Survey } from "../api/survey/[id]";
import { Survey as SurveyType } from '../api/survey/[id]'

type Props = {
  survey: Survey
}

const SurveyPage: NextPage<Props> = ({ survey }) => (
  <ul>
    <h2>Name: {survey.name}</h2>
    <h3>Details: {survey.details}</h3>
    <h3>Participants: {survey.participants}</h3>
    <h3>Engagement score: {survey.engagementScore}</h3>
  </ul>
)

// SIMPLE SERVER SIDE RENDERING

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  return {
    props: {
      survey: (await axios.get(`http://localhost:3000/api/survey/${params.id}`)).data
    }
  }
}

// Uncomment two functions below for INCREMENTAL STATIC REGENERATION over multiple paths.

// // This will collect a list of all the survey ids at build time.
// export const getStaticPaths = async () => {
//   const surveys = (await axios.get('http://localhost:3000/api/surveys')).data;
//
//   return {
//     paths: surveys.map((survey: SurveyType) => {
//       return {
//         params: { id: `${survey.id}` }
//       }
//     }),
//     fallback: true
//   };
// };
//
// // Then generate a survey page for each of the ids collected above at build time.
// export async function getStaticProps({params}: any) {
//   return {
//     props: {
//       survey: (await axios.get(`http://localhost:3000/api/survey/${params.id}`)).data,
//       revalidate: 86400, // But then is set to refresh (rebuild only this page) once a day
//     },
//   }
// }

export default SurveyPage

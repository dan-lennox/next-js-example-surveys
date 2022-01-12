import { SurveyTeaser as SurveyTeaserType } from "../pages/api/surveys";
import Link from 'next/link';

type Props = {
  survey: SurveyTeaserType
}

const SurveyTeaser = ({ survey: { id, name } }: Props) => <Link href={`survey/${id}`}>{name}</Link>

export default SurveyTeaser;
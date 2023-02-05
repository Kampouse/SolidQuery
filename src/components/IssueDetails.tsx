import { useParams } from '@solidjs/router'
export default function IssueDetails() {
  const { number } = useParams();

  return <h1>Issue {number}</h1>;
}
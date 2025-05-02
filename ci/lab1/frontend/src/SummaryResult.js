import { useLocation } from 'react-router-dom';

function SummaryResult() {
  const location = useLocation();
  const summary = location.state?.summary || '요약 결과 없음';

  return (
    <div>
      <h2>요약 결과</h2>
      <p>{summary}</p>
    </div>
  );
}

export default SummaryResult;

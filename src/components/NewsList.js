import { useContext } from 'react';
import Context from '../Context';
import useJsonFetch from '../hooks/useJsonFetch';
import News from './News';

export default function NewsList() {
  const { token } = useContext(Context);

  const [data, loading] = useJsonFetch(`${'http://localhost:7070/private/'}news`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });

  return (
    <div className="news-list">
      {loading && (<div className="newsList__loading">Загрузка...</div>)}
      {!loading && data && (
        data.map((item) => <News key={item.id} data={item} />)
      )}
    </div>
  );
}
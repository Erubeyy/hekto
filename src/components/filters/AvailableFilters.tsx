import { useEffect, useState } from 'react';
import { fetchAvailableFilters } from '../../util/http.tsx';
import Filters from './Filters.tsx';

interface Response {
  type: string;
  label: string;
  values: unknown;
}

const AvailableFilters = () => {
  const [filters, setFilters] = useState<{ filters: Response }>({
    filters: { type: 'string', label: 'string', values: [] },
  });
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function fetchFilters() {
      setIsFetching(true);

      try {
        const filters = await fetchAvailableFilters();
        setFilters(filters);
        setIsFetching(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Failed to do something exceptional');
        }

        setIsFetching(false);
      }
    }

    fetchFilters();
  }, []);

  if (error) {
    return <h1>An error occurred!{error}</h1>;
  }

  return (
    <>
      {isFetching && <h1>Loading...</h1>}
      {!isFetching && <Filters filters={filters} />}
    </>
  );
};

export default AvailableFilters;

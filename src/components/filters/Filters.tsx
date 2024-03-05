import MultiSelect from './filterTypes/MultiSelect';
import SingleSelect from './filterTypes/SingleSelect';
import RangeSelect from './filterTypes/RangeSelect';
import './Filters.scss';

interface Response {
  filters: { type: string; label: string; values: unknown };
}

const Filters: React.FC<{ filters: Response }> = ({ filters }) => {
  const FilterList = Object.values(filters);

  return (
    <>
      <div className="filters">
        <div className="filters__type">
          {FilterList.map((filter) => {
            if (filter.type === 'multi-select') {
              return (
                <MultiSelect
                  key={filter.label}
                  values={filter.values}
                  label={filter.label}
                />
              );
            } else if (filter.type === 'single-select') {
              return (
                <SingleSelect
                  key={filter.label}
                  values={filter.values}
                  label={filter.label}
                />
              );
            } else if (filter.type === 'range') {
              return (
                <RangeSelect
                  key={filter.label}
                  values={filter.values}
                  label={filter.label}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Filters;

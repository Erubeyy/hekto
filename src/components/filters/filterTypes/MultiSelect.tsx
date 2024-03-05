import { useContext } from 'react';
import { LabelString } from '../../types';
import { FilterContext } from '../../../store/filters-context';
import './Selects.scss';

interface MultiSelectType extends LabelString {
  values: string[];
}

const MultiSelect: React.FC<MultiSelectType> = ({ values, label }) => {
  const { applyFilter, changePageNumber } = useContext(FilterContext);

  const handleCheck = (item: string) => {
    changePageNumber(1);
    applyFilter(item, label);
  };

  return (
    <>
      <div className="filters__titleContainer">
        <span className="filters__title">{label}</span>
        <div className="filters__separator"></div>
      </div>
      {values.map((item) => {
        return (
          <div key={`${item}`} className="flex align-center gap-8">
            <input
              type="checkbox"
              id={item}
              onChange={() => handleCheck(item)}
            />
            <label className="filters__checkLabel" htmlFor={item}>
              {item}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default MultiSelect;

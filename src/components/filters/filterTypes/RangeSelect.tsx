import {
  ChangeEvent,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { LabelString } from '../../types';
import { FilterContext } from '../../../store/filters-context';
import '../Filters.scss';

interface RangeType extends LabelString {
  values: { min: number; max: number };
}

const RangeSelect: React.FC<RangeType> = ({ values, label }) => {
  const { applyFilter, changePageNumber } = useContext(FilterContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const applyFilterCallback = useCallback(applyFilter, []);

  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  useEffect(() => {
    changePageNumber(1);
    applyFilterCallback([minPrice || 0, maxPrice || 6500], label);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minPrice, maxPrice, applyFilterCallback, label]);

  const handleMinValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(+e.target.value);
  };

  const handleMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(+e.target.value);
  };

  return (
    <>
      <div className="filters__titleContainer">
        <span className="filters__title">{label}</span>
        <div className="filters__separator"></div>
      </div>
      <div className="flex justify-between gap-3 align-center">
        <label className="filters__checkLabel">Min: {values.min}</label>
        <input
          placeholder="0"
          className="filters__rangeInput"
          type="number"
          value={minPrice ?? ''}
          onChange={(e) => handleMinValue(e)}
        />
      </div>
      <div className="flex justify-between gap-3 align-center">
        <span className="filters__checkLabel">Max: {values.max}</span>
        <input
          placeholder="6500"
          className="filters__rangeInput"
          type="number"
          value={maxPrice ?? '6500'}
          onChange={(e) => handleMaxValue(e)}
        />
      </div>
    </>
  );
};

export default RangeSelect;

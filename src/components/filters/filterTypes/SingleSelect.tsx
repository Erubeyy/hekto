import { useContext } from 'react';
import { LabelString } from '../../types';
import { MdStar } from 'react-icons/md';
import { FilterContext } from '../../../store/filters-context';
import './Selects.scss';

interface SingleSelectType extends LabelString {
  values: number[];
}

const SingleSelect: React.FC<SingleSelectType> = ({ values, label }) => {
  const { applyFilter, changePageNumber } = useContext(FilterContext);

  const handleCheck = (item: number) => {
    changePageNumber(1);
    applyFilter(item, label);
  };

  return (
    <>
      <div className="filters__titleContainer">
        <span className="filters__title">{label}</span>
        <div className="filters__separator"></div>
      </div>
      {label === 'Rating'
        ? values.map((item) => {
            const stars = new Array(5).fill(0);
            return (
              <div
                key={`container_${item}`}
                className="flex align-center gap-8"
              >
                <input
                  type="radio"
                  id={`${label}-${item}`}
                  name={label}
                  value={item}
                  onChange={() => handleCheck(item)}
                />
                <label htmlFor={`${label}-${item}`}>
                  {stars.map((_item, index) => {
                    if (index < item) {
                      return (
                        <MdStar
                          className="filters__starRating"
                          key={`${item}-${index}`}
                          fill="#f9ba00"
                        />
                      );
                    } else {
                      return (
                        <MdStar
                          className="filters__starRating"
                          key={`${item}-${index}`}
                          fill="#e5e0fc"
                        />
                      );
                    }
                  })}
                </label>
              </div>
            );
          })
        : values.map((item) => {
            return (
              <div
                key={`container_${item}`}
                className="flex align-center gap-8"
              >
                <input
                  type="radio"
                  id={`${label}-${item}`}
                  name={label}
                  value={item}
                  onChange={() => handleCheck(item)}
                />
                <label
                  className="filters__checkLabel"
                  htmlFor={`${label}-${item}`}
                >
                  {item}%
                </label>
              </div>
            );
          })}
    </>
  );
};

export default SingleSelect;

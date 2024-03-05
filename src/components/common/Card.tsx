import './card.scss';

interface CardProps {
  image: string;
  title: string;
  code?: string;
  ogPrice?: string;
  discPrice?: string;
}

const Card = ({ image, title, code, ogPrice, discPrice }: CardProps) => {
  return (
    <>
      <div className="card">
        <img
          className={discPrice !== undefined ? 'card__img' : 'none'}
          src={image}
          alt={`${title} image`}
          width={discPrice !== undefined ? 272 : 304}
          height={232}
        />
        <div className="card__content">
          <span className="card__title">{title}</span>
          {code !== undefined ? (
            <span className="card__code">{code}</span>
          ) : null}
          <div className="card__price">
            <span
              className={
                discPrice !== undefined
                  ? 'card__ogPrice'
                  : 'card__ogUniquePrice'
              }
            >
              {ogPrice}
            </span>
            <span className="card__discPrice">{discPrice}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

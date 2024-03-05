import './LaCard.scss';

interface CardProps {
  image: string;
  title: string;
  DiscPrice: string;
  OgPrice: string;
}

const Card = ({ image, title, DiscPrice, OgPrice }: CardProps) => {
  return (
    <>
      <div className="laCard">
        <img src={image} alt={`${title} image`} />
        <div className="laCard__content">
          <span className="laCard__title">{title}</span>
          <div className="laCard__prices">
            <span className="laCard__discPrice">{DiscPrice}</span>
            <span className="laCard__ogPrice">{OgPrice}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

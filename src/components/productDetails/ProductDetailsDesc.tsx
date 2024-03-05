import { IoCheckmarkOutline } from 'react-icons/io5';

import './ProductDetailsDesc.scss';

const ProductDetailsDesc = () => {
  return (
    <div className="productDetailsDesc">
      <div className="productDetailsDesc__content">
        <ul className="productDetailsDesc__heading">
          <li>
            Description <div className="productDetailsDesc__underline" />
          </li>
          <li>Additional Info</li>
          <li>Reviews</li>
          <li>Video</li>
        </ul>
        <div>
          <span className="productDetailsDesc__subtitle">Varius tempor.</span>
          <p className="productDetailsDesc__para productDetailsDesc__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
            quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero
            consectetur. Pellentesque diam dolor, tincidunt nec ante congue,
            tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis
            ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec
            ultricies diam. Integer feugiat odio ut dictum viverra. Donec
            vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut
            sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas
            quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam
            in est purus
          </p>
          <span className="productDetailsDesc__subtitle">More details</span>
          <ul className="productDetailsDesc__list productDetailsDesc__text">
            <li>
              <IoCheckmarkOutline />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
              quam dolor. In dignissim lectus sed nisl tempor, ac porttitor
              libero consectetur.
            </li>
            <li>
              <IoCheckmarkOutline />
              Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac
              porttitor libero consectetur. Pellentesque diam dolor, tincidunt
              nec ante.
            </li>
            <li>
              <IoCheckmarkOutline />
              Pellentesque diam dolor, tincidunt nec ante congue, tincidunt
              facilisis tortor.
            </li>
            <li>
              <IoCheckmarkOutline />
              Mauris vitae massa molestie, sagittis ligula vel, egestas massa.
              Phasellus quis sodales augue. Donec nec ultricies diam.
            </li>
            <li>
              <IoCheckmarkOutline />
              Phasellus quis sodales augue. Integer feugiat odio ut dictum
              viverra.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsDesc;

export const ProductModal = ({ product }) => {
  return (
    <>
      <img src={product.src} alt="img" />
      <div>
        <h3 className="modal-title">{product.name}</h3>
        <p className="modal-desc">{product.description}</p>
        <section>
          <h5>Size</h5>
          <ul>
            <li>
              <span>S</span>
              <span>{product.sizes.s.size}</span>
            </li>
            <li>
              <span>M</span>
              <span>{product.sizes.m.size}</span>
            </li>
            <li>
              <span>L</span>
              <span>{product.sizes.l.size}</span>
            </li>
          </ul>
        </section>
        <section>
          <h5>Additives</h5>
          <ul>
            <li>
              <span>1</span>
              <span>{product.additives[0].name}</span>
            </li>
            <li>
              <span>2</span>
              <span>{product.additives[1].name}</span>
            </li>
            <li>
              <span>3</span>
              <span>{product.additives[2].name}</span>
            </li>
          </ul>
        </section>
        <section>
          <h3>Total:</h3>
          <b>4.5</b>
        </section>
        <section>
          <span class="material-symbols-outlined">info</span>
          <span>
            The cost is not final. Download our mobile app to see the final
            price and place your order. Earn loyalty points and enjoy your
            favorite coffee with up to 20% discount.
          </span>
        </section>
      </div>
    </>
  );
};

export const ProductModal = ({ product }) => {
  <>
    <img src="" alt="img" />
    <div>
      <h3 className="modal-title">Title</h3>
      <p className="modal-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eos,
        cumque odit magnam nulla nihil itaque adipisci incidunt reprehenderit
        architecto ad officia fuga?
      </p>
      <section>
        <h5>Size</h5>
        <ul>
          <li>
            <span>S</span>
            <span>200 ml</span>
          </li>
          <li>
            <span>M</span>
            <span>300 ml</span>
          </li>
          <li>
            <span>L</span>
            <span>400 ml</span>
          </li>
        </ul>
      </section>
      <section>
        <h5>Additives</h5>
        <ul>
          <li>
            <span>1</span>
            <span>Sugar</span>
          </li>
          <li>
            <span>2</span>
            <span>Lemon</span>
          </li>
          <li>
            <span>3</span>
            <span>Syrup</span>
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
          The cost is not final. Download our mobile app to see the final price
          and place your order. Earn loyalty points and enjoy your favorite
          coffee with up to 20% discount.
        </span>
      </section>
    </div>
  </>;
};

import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Notes</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">600</span>
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Newly Added</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">15</span>

        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Deleted</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">345</span>
        </div>
      </div>

    </div>
  );
}

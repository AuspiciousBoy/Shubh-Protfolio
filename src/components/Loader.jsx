function Loader() {
  return (
    <div className="loader">
      <div className="loader__inner">
        <span className="loader__letter">S</span>
        <span className="loader__letter loader__letter--second">T</span>
      </div>
      <div className="loader__tagline">Portfolio</div>
      <div className="loader__bar">
        <div className="loader__bar-fill"></div>
      </div>
    </div>
  )
}
export default Loader

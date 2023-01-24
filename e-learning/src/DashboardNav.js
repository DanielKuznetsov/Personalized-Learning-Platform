import "./styles/DashboardNav.scss";

function DashboardNav({ classActive, updateActiveClass }) {
  return (
    <nav className="subject-nav">
      <ul className="subject-nav-list">
        <li onClick={updateActiveClass} name="calculusOne" className={classActive.calculusOne ? "subject-nav-item active" : "subject-nav-item"}>Calculus</li>
        <li onClick={updateActiveClass} name="preCalculus" className={classActive.preCalculus ? "subject-nav-item active" : "subject-nav-item"}>Pre-Calculus</li>
        <li onClick={updateActiveClass} name="trig" className={classActive.trig ? "subject-nav-item active" : "subject-nav-item"}>Trigonometry</li>
        <li onClick={updateActiveClass} name="algebraOne" className={classActive.algebraOne ? "subject-nav-item active" : "subject-nav-item"}>Algebra 1</li>
        <li onClick={updateActiveClass} name="algebraTwo" className={classActive.algebraTwo ? "subject-nav-item active" : "subject-nav-item"}>Algebra 2</li>
        <li onClick={updateActiveClass} name="geometry" className={classActive.geometry ? "subject-nav-item active" : "subject-nav-item"}>Geometry</li>
      </ul>
    </nav>
  );
}

export default DashboardNav;

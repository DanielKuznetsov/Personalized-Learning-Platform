import "./styles/DashboardNav.scss";

function DashboardNav({ data, classActive, updateActiveClass }) {
  return (
    <nav className="subject-nav">
      <ul className="subject-nav-list">
        {data.map((subject, index) => {
          return (
            <li
              key={index * 23}
              onClick={updateActiveClass}
              name={subject.urlTitle}
              className={
                classActive[subject.urlTitle]
                  ? "subject-nav-item active"
                  : "subject-nav-item"
              }
            >
              {subject.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default DashboardNav;

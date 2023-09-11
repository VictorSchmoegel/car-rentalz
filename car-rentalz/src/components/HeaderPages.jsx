import { Link } from "react-router-dom";

function HeaderPages ({ title }) {
  return (
    <section>
      <div className="header_pages_display">
        <div className="header_pager_container">
          <div className="header_pages_text">
            <h3>{ title }</h3>
            <p><Link to="/">Home</Link> { title }</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderPages;
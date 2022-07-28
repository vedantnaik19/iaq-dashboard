import "./side-bar.css";
import { useSites, useUpdateCheckedSites } from "../../contexts/SitesContext";

const SideBar = () => {
  const handleOnChange = useUpdateCheckedSites();
  const [sites, checkedSites] = useSites();
  return (
    <div className="side-bar-container">
      <h5>Sites</h5>
      {sites.map((site) => (
        <div key={site._id} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={site._id}
            id={site._id}
            onChange={() => handleOnChange(site._id)}
            checked={checkedSites.has(site._id)}
          />
          <label className="form-check-label">{site.name}</label>
        </div>
      ))}
    </div>
  );
};

export default SideBar;

import React from "react";
import './JobTile.scss'

export default function JobTile(props) {

    const {jobTitle, companyName, jobTasks} = props;

  return (
    <div className="job-tile">
      <h2>{jobTitle}</h2>
      <h3>{companyName}</h3>
      <ul>
        {jobTasks?.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

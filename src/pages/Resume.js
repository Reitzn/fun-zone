import React from "react";

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <p>It ain't much, but it's honest work.</p>

      <div class="content">
        <ul class="list-group">
          <li class="list-group-item">
            <h2>Software Engineer</h2>
            <h4>Randstad Technologies</h4>
            <ul>
              <li>
                <p>Build React Componets for AEM(Adobe Experance Manager)</p>
              </li>
            </ul>
          </li>
          <li class="list-group-item">
            <h2>Software Developer</h2>
            <h4>Auto-Owners Insurance</h4>
            <ul>
              <li>
                <p>
                  Designed, developed, and deployed case management systems for
                  various departments in an agile environment
                </p>
              </li>
              <li>
                <p>Front end JavaScript and back end Java development</p>
              </li>
              <li>
                <p>
                  Migrated documents and cases from legacy systems to new case
                  management systems
                </p>
              </li>
              <li>
                <p>
                  Developed and maintained SQL Server Reporting Services reports
                </p>
              </li>
              <li>
                <p>
                  Implemented application monitoring tools to increase
                  visibility and performance monitoring to web-based
                  applications
                </p>
              </li>
            </ul>
          </li>
          <li class="list-group-item">
            <h2>Audit Tech</h2>
            <h4>Dow Chemical</h4>
            <ul>
              <li>
                <p>
                  Managed and developed the Auditing Department’s Intranet and
                  SharePoint content{" "}
                </p>
              </li>
              <li>
                <p>Developed custom web-based applications and forms</p>
              </li>
              <li>
                <p>Development for computer automation and report generation</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

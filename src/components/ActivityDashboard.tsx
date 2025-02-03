import React from 'react';

const ActivityDashboard: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <img alt="DashList" src="https://docs.pixee.ai/img/pixee_dashlist.png" />
      <h2>Pixeebot Activity Dashboard</h2>
      <p>This dashboard summarizes my activity on the repository, including available improvement opportunities.</p>
      <h3>Recommendations</h3>
      <p>Last analysis: Feb 01 | Next scheduled analysis: Feb 08</p>
      <p><strong>NOTE</strong>: I've identified this repository's primary language as JavaScript. To fix code in this language, you must connect a supported code scanning tool.</p>
      <h3>Open</h3>
      <p>✅ Nice work, you're all caught up!</p>
      <h3>Available</h3>
      <p>✅ Nothing yet, but I'm continuing to monitor your PRs.</p>
      <h3>Metrics</h3>
      <p>What would you like to see here? <a href="https://tally.so/r/mYa4Y5" target="_blank" rel="noreferrer">Let us know!</a></p>
      <h3>Resources</h3>
      <ul>
        <li><a href="https://docs.pixee.ai/" target="_blank" rel="noreferrer">Pixee Docs</a></li>
        <li><a href="https://codemodder.io/" target="_blank" rel="noreferrer">Codemodder by Pixee</a></li>
        <li><a href="https://docs.pixee.ai/code-scanning-tools/sonar" target="_blank" rel="noreferrer">SonarCloud</a></li>
        <li><a href="https://docs.pixee.ai/code-scanning-tools/sonarqube" target="_blank" rel="noreferrer">SonarQube</a></li>
        <li><a href="https://docs.pixee.ai/code-scanning-tools/codeql" target="_blank" rel="noreferrer">CodeQL</a></li>
        <li><a href="https://docs.pixee.ai/code-scanning-tools/semgrep" target="_blank" rel="noreferrer">Semgrep</a></li>
        <li><a href="https://github.com/pixee/pixee-cli" target="_blank" rel="noreferrer">Pixee CLI</a></li>
        <li><a href="https://ask.pixee.ai/feedback" target="_blank" rel="noreferrer">Feedback</a></li>
      </ul>
    </div>
  );
};

export default ActivityDashboard;

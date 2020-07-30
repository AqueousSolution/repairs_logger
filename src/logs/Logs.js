import React, { useState, useEffect } from "react";
import LogItems from "./LogItems";
import Preloader from "../Preloader";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);
  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <Preloader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center"> System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p>No logs</p>
      ) : (
        logs.map(log => <LogItems log={log} key={log.id} />)
      )}
    </ul>
  );
};
export default Logs;

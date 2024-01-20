import React, { useEffect, useState } from "react";
import axios from "axios";
function Test(props) {
  const [testList, setTestList] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "/sample1",
    })
      .then((res) => {
        console.log(res);
        setTestList(res.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>seqno</td>
            <td>content</td>
          </tr>
        </thead>
        <tbody>
          {testList.map((value, index) => (
            <tr key={index}>
              <td>{value.seqno}</td>
              <td>{value.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Test;

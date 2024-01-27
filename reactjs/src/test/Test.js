import React, { useEffect, useState } from "react";
import axios from "axios";
function Test(props) {
  const [testList, setTestList] = useState([]);
  const [test, setTest] = useState({ content: "" });
  const change = (e) => {
    setTest({ content: e.target.value });
  };
  const changeList = (e) => {
    const new_testList = testList.map((testData) => {
      if (testData.seqno == e.target.name) {
        testData.content = e.target.value;
      }
      return testData;
    });
    setTestList([...new_testList]);
  };
  const update = (e) => {
    console.log(e.target);
    console.log(e.target.attributes.miracle.nodeValue, e.target.name);
    const content = e.target.attributes.miracle.nodeValue;
    const seqno = e.target.name;

    axios({
      method: "put",
      url: "/update",
      data: { seqno: seqno, content: content },
    })
      .then((res) => {
        setTestList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const keyta = (e) => {
    const omurice = e.target.attributes.omurice.nodeValue;
    axios({ method: "delete", url: `/delete/${omurice}` })
      .then((res) => {
        setTestList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const click = () => {
    axios({
      method: "post",
      url: "/input",
      data: test,
    })
      .then((res) => {
        setTestList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
            <td>update</td>
            <td>delete</td>
          </tr>
        </thead>
        <tbody>
          {testList.map((value, index) => (
            <tr key={index}>
              <td>{value.seqno}</td>
              <td>
                <input
                  name={value.seqno}
                  value={value.content}
                  onChange={changeList}
                ></input>
              </td>
              <td>
                <button
                  name={value.seqno}
                  miracle={value.content}
                  onClick={update}
                >
                  업데이트
                </button>
              </td>
              <td>
                <button omurice={value.seqno} onClick={keyta}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <input onChange={change} value={test.content}></input>
      <button onClick={click}>삽입 버튼</button>
    </div>
  );
}

export default Test;

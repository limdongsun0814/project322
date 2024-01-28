import axios from "axios";
import React, { useEffect, useState } from "react";

function Test2(props) {
  const [testList, setTestList] = useState([]);
  const [test, setTest] = useState({ content: "" });
  const change = (e) => {
    console.log(e.target.value);
    setTest({ content: e.target.value });
  };
  const deleteTest = (e) => {
    axios({ method: "delete", url: `/delete.do/${e.target.name}` }).then(
      (res) => {
        console.log(res.data);
        setTestList([...res.data]);
      }
    );
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
  const updateTest = (e) => {
    console.log(e.target.attributes.miracle.nodeValue);
    console.log(e.target.name);
    axios({
      method: "put",
      url: "/updateTest.do",
      data: {
        seqno: e.target.name,
        content: e.target.attributes.miracle.nodeValue,
      },
    }).then((res) => {
      console.log(res.data);
      setTestList([...res.data]);
    });
  };
  const insertTest = () => {
    console.log(test);
    axios({ method: "post", url: "/insertTest.do", data: test }).then((res) => {
      console.log(res.data);
      setTestList([...res.data]);
    });
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "/getTest.do",
    }).then((res) => {
      console.log(res.data);
      setTestList([...res.data]);
    });
  }, []);

  return (
    <div>
      <h1>Test2</h1>
      <table>
        <thead>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
          </tr>
        </thead>
        <tbody>
          {testList.map((testData, index) => (
            <tr key={index}>
              <td>{testData.seqno}</td>
              <td>
                <input
                  value={testData.content}
                  name={testData.seqno}
                  onChange={changeList}
                ></input>
              </td>
              <td>
                <button
                  name={testData.seqno}
                  miracle={testData.content}
                  onClick={updateTest}
                >
                  업데이트
                </button>
              </td>
              <td>
                <button name={testData.seqno} onClick={deleteTest}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <input onChange={change} value={test.content}></input>
      <button onClick={insertTest}>삽입 버튼</button>
    </div>
  );
}

export default Test2;

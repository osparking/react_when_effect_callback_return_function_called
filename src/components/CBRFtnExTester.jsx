import { useEffect, useRef, useState } from "react";
// Callback Function Return Function call situation tester
// useEffect 의 첫째 인자인 콜백함수가 반환하는 함수가 언제
// 호출되는지 시험하기 위한 성분.
const CBRFtnExTester = () => {
  const [showWarning, setShowWarning] = useState(false);
  const timerId = useRef(null);

  useEffect(() => {
    if (showWarning) {
      timerId.current = setTimeout(() => {
        setShowWarning(false);
      }, 10000);
    }
    return () => {
      if (timerId.current !== null) {
        console.log("콜백함수 반환 함수 실행됨!");
        clearTimeout(timerId.current);
      }
    };
  }, [showWarning]);

  function handleClick() {
    setShowWarning(true);
  }

  return (
    <div className="warn">
      {showWarning && (
        <div className="warningMsg">이것은 10초간 유지되는 경고이다!</div>
      )}
      <button className="btn" onClick={handleClick}>
        10초 경고 표시
      </button>
    </div>
  );
};

export default CBRFtnExTester;

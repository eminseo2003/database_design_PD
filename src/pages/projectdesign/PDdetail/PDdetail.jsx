import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './PDdetail.css';

function PDdetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const item = location.state;

  if (!id) {
    return <p>ID가 제공되지 않았습니다.</p>;
  }
  const handleapply = () => {
    navigate('/projectdesign/apply');
  };

  return (
    <div>
      <div className="pd-detail-container">
        <div className="pdtoptitle">
          <p>{item.title}</p>
        </div>
        <p className="pdprocessfontsize">모집 진행</p>
        <div className="pdprocess">
          {item.process.map((step, index) => (
            <React.Fragment key={index}>
              <div className="pdprocessstep">
                <div className="pdprocessstep-content">
                  <p>{step.step}</p>
                  <p>{step.date}</p>
                </div>
              </div>
              {index < item.process.length - 1 && <div className="CTarrow">→</div>}
            </React.Fragment>
          ))}
        </div>
        <p className="pdparticipationfontsize">모집 대상</p>
        <div className="pdparticipation">
          <p>{item.who}</p>
        </div>
        <p className="pdevaluationfontsize">모집 정보</p>
        <div className="pdevaluation">
          <p>{item.textcontent}</p>
        </div>

        <div className="pdbutton">
          <button onClick={handleapply}>협업 지원하기</button>
        </div>
      </div>
    </div>
  );
}

export default PDdetail;

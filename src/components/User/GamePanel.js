import React from 'react';
import styled from 'styled-components';
import {useUserContext} from '../../context/UserContext';

function GamePanel() {
  const {loadUser} = useUserContext();

  if (!loadUser) {
    return null;
  }

  const {happy, health} = loadUser.userInfo;
  const list = [
    {id: 1, name: 'health', icon: '❤️', width: health},
    {id: 2, name: 'happy', icon: '⭐️', width: happy},
  ];

  return (
    <Wrapper>
      {list.map((item) => {
        const {icon, name, id, width} = item;
        return (
          <div key={id} className="info__item">
            {icon}
            <div className="info__box">
              <div className="info__bar">
                <div
                  style={{width: `${width}%`}}
                  className="info__progress"
                ></div>
              </div>
              <div className="info__etc">
                <p>{width}/100</p>
                <h1>{name}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
  .info__item {
    display: grid;
    grid-template-columns: auto 1fr;

    .info__box {
      display: flex;
      flex-direction: column;
      width: 90%;
      align-items: center;
      margin: 0 1rem;
      .info__bar {
        margin-top: 4px;
        width: 100%;
        height: 10px;
        border-radius: 3px;
        background-color: var(--color-dark);
        position: relative;
        .info__progress {
          transition:0.3s linear;
          position: absolute;
          left: 0;
          top: 0;
          height: inherit;
          border-radius: inherit;
          background-color: var(--color-green);
        }
      }
    }
    .info__etc {
      margin: 15px 0;
      width: 100%;
      display: flex;
      justify-content: space-between;

      .info__etc__box {
        display: flex;
      }
    }
  }
`;

export default GamePanel;

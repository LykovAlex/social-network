import React from 'react';
import Friend from './friend/Friend'
import style from './Friends.module.css';

const Friends = (props) => {

  let friend = props.friends
    .map(friend => <Friend name={friend.name} photo={friend.photo} key={friend.id} id={friend.id} />);

    return (
        <div className={style.friends}>
          <h2 className={style.friends__title}>My friends</h2>
          <div className={style.friends__wrapper}>
            {friend}
          </div>
        </div>
      )
}

export default Friends;

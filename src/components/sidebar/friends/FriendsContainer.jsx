import Friends from './Friends';
import {connect} from 'react-redux';

// const Friends = (props) => {
//
//   let friend = props.friends
//     .map(friend => <Friend name={friend.name} photo={friend.photo} key={friend.id} id={friend.id} />);
//
//     return (
//         <div className={style.friends}>
//           <h2 className={style.friends__title}>My friends</h2>
//           <div className={style.friends__wrapper}>
//             {friend}
//           </div>
//         </div>
//       )
// }
const mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;

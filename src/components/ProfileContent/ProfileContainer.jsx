import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from './../../redux/Profile-reducer';
import axios from "axios";
import { useParams } from 'react-router-dom';
export function withRouter(Children){
  return(props)=>{
     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
}
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    debugger
    if (!userId) {
      userId=2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
      .then(response => {
        this.props.setUserProfile(response.data)
      });
  }
  render(){
    return (
        <Profile {...this.props} profile={this.props.profile}/>
    );
  }
};
const mapStateToProps = (state)=>({
  profile: state.profilePage.profile
});
// function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//     alert("sdf")
//       let params = useParams();
//       return (
//           <Component
//               {...props}
//               router={{params }}
//           />
//       );
//   }

//   return ComponentWithRouterProp;
// }
export default connect(mapStateToProps, {setUserProfile}) (withRouter(ProfileContainer));

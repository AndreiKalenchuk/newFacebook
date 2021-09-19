import {
    addNewPost,
    increaseLikeCount
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
       // value: state.profilePage.newPostText,
    }
};
const MyPostsContainer = connect(mapStateToProps,
    {addNewPost, increaseLikeCount})(MyPosts);

export default MyPostsContainer;
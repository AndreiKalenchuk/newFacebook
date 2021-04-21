import {
    addNewPost,
    updateNewPostText,
    increaseLikeCount
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        value: state.profilePage.newPostText,
    }
};
const MyPostsContainer = connect(mapStateToProps, {addNewPost, updateNewPostText, increaseLikeCount})(MyPosts);

export default MyPostsContainer;
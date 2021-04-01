import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
    increaseLikeCountActionCreator
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        value: state.profilePage.newPostText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        increaseLikeCount: (index) => {
            dispatch(increaseLikeCountActionCreator(index))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
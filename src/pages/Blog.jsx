import { useParams } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import ErrorsID from './layouts/ErrorsID';
import BlogsHook from '../hook/BlogHook';

Blog.propTypes = {

};

function Blog(props) {
    const { id } = useParams()
    console.log(id)
    const {posts,status} = BlogsHook(id)
    return (
        <div>
            <LazyLoad offset={100} debounce={150} placeholder={<>Loading...</>}>
                {status  ? (
                    <div className='detail_posts'>
                        <h1>{posts.title}</h1>
                        <p>{posts.desc}</p>
                        <img src={`${posts.image}`} alt="" />
                        <p>{posts.description}</p>
                    </div>
                ):(
                    <ErrorsID/>
                )}

            </LazyLoad>
        </div>
    );
}

export default Blog;
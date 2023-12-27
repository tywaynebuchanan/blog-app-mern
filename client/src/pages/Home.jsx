import {Link} from 'react-router-dom'
const Home = () => {

   const posts = [
    {
       id: 1,
       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
       img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
       id: 2,
       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
       img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
       id: 3,
       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
       img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
      id: 4,
       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
       img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
   ];

  return (
    <div className="home">
    <div className="posts">

    {posts.map(({ id, title, desc, img }) => (
      <div className = "post" key={id}>
      <div className="img">
        <img src={img} alt="" />
      </div>

      <div className="content">
        <Link className = "link" to = {`/post/${id}`}>
          <h1>{title}</h1>
        </Link>
        <p>{desc}</p>
        <button>Read More</button>
      </div>
        
      </div>
))}
    </div>
    </div>
  )
}

export default Home
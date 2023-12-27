import Delete from '../img/delete.png'
import Edit from '../img/edit.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu/Menu'
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
          <Link to ={`/write?edit=2`}> <img src={Edit} alt="" /></Link>
           <Link><img src={Delete} alt="" /></Link>         
          </div>
         
        </div>
         <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. laboriosam magnam magni quibusdam tempora excepturi velit?</h1>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur nulla iure unde dolorum, mollitia quod laborum dignissimos consequatur asperiores, ipsa deserunt minus? Dolorum maiores iure dolore delectus. Reiciendis, quod a!</p>
      </div>
        <Menu/>
  
    </div>
  )
}

export default Single
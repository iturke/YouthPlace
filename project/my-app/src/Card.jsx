import profilePic from './assets/vite.svg'

function Card(){
    return(
      <div className="card">
           <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">YouthPlace </h2>
            <p className='card-text'> our site </p>
      </div>  
    );
}

export default Card

const user = {
  name: 'John Doe',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}
const isLoggedIn = true;

const Profile = () => {
  return (
    <>
      <h1>{isLoggedIn && "Hello "}{user.name}</h1>
      <img 
        src={user.imageUrl} 
        alt={"Photo of " + user.name} 
        className="avatar" 
        style={{ 
          width: user.imageSize, 
          height: user.imageSize 
        }} 
      />
    </>
  );
}

export default Profile;

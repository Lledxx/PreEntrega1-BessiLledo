

import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";




const user1 = "Joaquin Alejandro Bessi Lledo";

class App extends React.Component {
  
render() {
    return (
      <div className="App">
        <NavBar />
        <ItemListContainer />
        <div className="UserSection">
          <UserCard
            img="https://res.cloudinary.com/dz209s6jk/image/upload/v1626202389/Avatars/usd4kgugmvx0tn9fkcea.jpg"
            name={user1}
            date="Se unió en Enero 2023"
            description="Futuro Full stack Developer"
          />
        </div>
       
      </div>
    );
  }
}

export default App;

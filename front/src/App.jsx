
import { useEffect } from 'react'
import './App.css'
import ListUtilisateurs from './composants/listUsers'

function App() {
  useEffect(() => {
    async function getPong(){
      const reponse = await fetch("/api/ping")
      const data = await reponse.json();
      console.log(data)
    }
    getPong()
  },[]);

  async function ajouteUtilisateur(nom, prenom) {
    const user = {nom, prenom};
    const reponse = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    
    })
    
  }

  return (
    <>
      <h1>Roulette Russe</h1>
      <ListUtilisateurs onSubmit={ajouteUtilisateur}/>
    </>
  )
}

export default App

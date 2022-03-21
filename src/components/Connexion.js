import '../css/Connexion.css'
import {useState} from "react";
import { login } from '../lib/api/public';

function Connexion() {

const handleFinish = async(value) =>{
    const email = value.email;
    const pass = value.pass;
    const result = await login(email, pass);
    console.log("result", result);
}
const [email, setMail] = useState("");
const handleChangeMail = (event) => {
    const value = event.target.value;
    if (value !== "") {
        setMail(value);
    }
}

    const [pass, setPass] = useState("");
    const handleChangePass = (event) => {
        const value = event.target.value;
        if(value !== "") {
            setPass(value);
        }
    }
// const[butConnexion, setButConnexion] = useState(0);
const handleButConnexion = (event) => {
    // const value = event.target.value;
    // if(value == true) {
    console.log(email);
    console.log(pass);
    // useState(true);
//}
}
    return (
        <div>
            {/* <h2>Social Network</h2> */}
            <div>
                <form className="col">
                    <div className="connexionInput">
                        <div > <input className="inputMail"
                        type="email" 
                        placeholder="Adresse e-mail ou numéro de tél." id="adress" name="email"
                        onChange={handleChangeMail} /></div>
                        
                        <div ><input className="inputMdp"
                        type="password"
                        placeholder="Mot de passe"
                        id="mdp" name="mdp" 
                        onChange={handleChangePass}/></div>
                      
                        <div ><button className="butConnexion" onClick={handleButConnexion} >Se connecter</button></div>
                    </div>
                    {/* <div><h4>Mot de passe oublie ?</h4></div> */}
                    {/* <div><button className='mdpOublie'>Mot de passe oublie ?</button></div>
                    <div ><button className="butNewCompte" >Créer nouveau compte</button></div> */}
                </form>

            </div>

        </div>
    );
}
export default Connexion;
import React from "react";
import { register } from "../lib/api/public";
import { useState } from "react";
import '../css/Creation.css'


const Creation = () => {

    const handleFinish = async (value) => {

        const { nom, prenom, email, pass } = value;
        await register(nom, prenom, email, pass)
        console.log(value.nom, value.prenom, value.email, value.pass)
    }

    const [nom, setNom] = useState("");
    const handleChangeNom = (event) => {
        const value = event.target.value;
        if (value !== "") {
            setNom(value);
        }
    }

    const [prenom, setPrenom] = useState("");
    const handleChangePrenom = (event) => {
        const value = event.target.value;
        if (value !== "") {
            setPrenom(value);
        }
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
        if (value !== "") {
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
    }

    return (
        <div>
            <form className="col">
                <div className="connexionInput">
                    <div ><input className="inputNom"
                        type="text"
                        placeholder="Nom"
                        id="nom" name="nom"
                        onChange={handleChangeNom} /></div>

                    <div ><input className="inputPrenom"
                        type="text"
                        placeholder="Prenom"
                        id="prenom" name="prenom"
                        onChange={handleChangePrenom} /></div>



                    <div > <input className="inputMail"
                        type="email"
                        placeholder="Adresse e-mail ou numéro de tél." id="adress" name="email"
                        onChange={handleChangeMail} /></div>

                    <div ><input className="inputMdp"
                        type="password"
                        placeholder="Mot de passe"
                        id="mdp" name="mdp"
                        onChange={handleChangePass} /></div>

                    <div ><button className="butConnexion" onClick={handleButConnexion} >Créer un compte</button></div>
                </div>
                {/* <div><h4>Mot de passe oublie ?</h4></div> */}
                {/* <div><button className='mdpOublie'>Mot de passe oublie ?</button></div>
                    <div ><button className="butNewCompte" >Créer nouveau compte</button></div> */}
            </form>


        </div>
    );
}
export default Creation;
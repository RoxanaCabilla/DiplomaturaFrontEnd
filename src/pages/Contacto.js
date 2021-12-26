import react from 'react';

const ContactoPage = (props) => {
    <main className="holder">
    <div className="columna left">
        <h2>Contacto Rápido</h2>
        <form action="" method="" className="formulario">
            <p>
                <label for="">Nombre</label>
                <input type="text"/>
            </p>
            <p>
                <label for="">email</label>
                <input type="text"/>
            </p>
            <p>
                <label for="">Teléfono</label>
                <input type="text"/>
            </p>
            <p>
                <label for="">Mensaje</label>
                <textarea id="comentario"></textarea>
            </p>
            <p className="acciones"><input type="submit" value="Enviar"/></p>
        </form>
    </div>
    <div className="columna right">
        <h2>Otras vías de contacto</h2>
        <p>También se pueden comunicar con nosotros...</p>
        <ul>
            <li>Teléfono: 4464-1222</li>
            <li>Email: libreria502@yahoo.com.ar</li>
            <li>Instagram: @libreria502_</li>
        </ul>
    </div>
</main>
}
export default ContactoPage;
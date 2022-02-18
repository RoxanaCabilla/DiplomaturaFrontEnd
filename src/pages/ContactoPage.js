
import { useState } from 'react';
import axios from 'axios';
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, SetMsg] = useState('');
    const [formData, SetFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        SetFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        SetMsg('');
        setSending(true)
        // const response = await axios.post('http://localhost:3000/api/contacto', formData);
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        SetMsg(response.data.message);
        if (response.data.error === false) {
            SetFormData(initialForm)
        }
    }

    return (
        <main className="holder">
            <div className="columna left">
                <h2>Contacto Rápido</h2>
                <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label>email </label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar" /></p>
                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
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
    )
}
export default ContactoPage;
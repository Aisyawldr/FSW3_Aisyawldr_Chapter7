import React from 'react';
import Container from 'react-bootstrap/esm/Container';

const Banner = () => {
    return (
        <Container fluid="md">
            <div className="cta-banner d-flex flex-column align-items-center p-5 my-5">
                <h1>Sewa Mobil di Padang Sekarang</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <a href="/cars">
                    <button className="btn btn-success">Mulai Sewa Mobil</button>
                </a>
            </div>
        </Container>
    );
};

export default Banner;

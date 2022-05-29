import React from "react";
import "./galeria.css"

export default function Galeria() {

    return (
        <main>
            <section>
                <ul>
                    <li>
                        <a href="#img1">
                            <img src="https://github.com/Rafalesson/AdoteAqui/blob/main/IMG/Cachorro.jpg?raw=true" class="min" />
                        </a>
                        <p>Um montante de caracteres ordenados seguindo a norma padrão da língua portuguesa que não faz sentindo algum além de encher linguiça. </p>
                        <button>Comprar</button>
                    </li>
                    <li>
                        <a href="#img2">
                            <img src="https://github.com/Rafalesson/AdoteAqui/blob/main/IMG/Cachorro6.jpg?raw=true" class="min" />
                        </a>
                        <p>Um montante de caracteres ordenados seguindo a norma padrão da língua portuguesa que não faz sentindo algum além de encher linguiça. </p>
                        <button>Comprar</button>
                    </li>
                    <li>
                        <a href="#img3">
                            <img src="https://github.com/Rafalesson/AdoteAqui/blob/main/IMG/Gato.jpg?raw=true" class="min" />
                        </a>
                        <p>Um montante de caracteres ordenados seguindo a norma padrão da língua portuguesa que não faz sentindo algum além de encher linguiça. </p>
                        <button>Comprar</button>
                    </li>
                    <li>
                        <a href="#img4">
                            <img src="https://github.com/Rafalesson/AdoteAqui/blob/main/IMG/Gato1.jpg?raw=true" class="min" />
                        </a>
                        <p>Um montante de caracteres ordenados seguindo a norma padrão da língua portuguesa que não faz sentindo algum além de encher linguiça. </p>
                        <button>Comprar</button>
                    </li>
                    <li>
                        <a href="#img5">
                            <img src="https://github.com/Rafalesson/AdoteAqui/blob/main/IMG/Cachorro8.jpg?raw=true" class="min" />
                        </a>
                        <p>Um montante de caracteres ordenados seguindo a norma padrão da língua portuguesa que não faz sentindo algum além de encher linguiça. </p>
                        <button>Comprar</button>
                    </li>
                </ul>
            </section>

            <section class="lbox" id="img1">
                <section class="box_img">
                    <a href="#img4" class="btn" id="prev">&#171;</a>
                    <a href="" class="btn" id="close">X</a>
                    <img src="https://github.com/Rafalesson/AdoteAqui/blob/main/IMG/Cachorro.jpg?raw=true" />
                    <a href="#img2" class="btn" id="next">&#187;</a>
                </section>
            </section>

            <section class="lbox" id="img2">
                <section class="box_img">
                    <a href="#img1" class="btn" id="prev">&#171;</a>
                    <a href="" class="btn" id="close">X</a>
                    <img src="https://github.com/Rafalesson/AdoteAqui/blob/main/IMG/Cachorro6.jpg?raw=true" />
                    <a href="#img3" class="btn" id="next">&#187;</a>
                </section>
            </section>

            <section class="lbox" id="img3">
                <section class="box_img">
                    <a href="#img2" class="btn" id="prev">&#171;</a>
                    <a href="" class="btn" id="close">X</a>
                    <img src="https://github.com/Rafalesson/AdoteAqui/blob/main/IMG/Gato.jpg?raw=true" />
                    <a href="#img4" class="btn" id="next">&#187;</a>
                </section>
            </section>

            <section class="lbox" id="img4">
                <section class="box_img">
                    <a href="#img3" class="btn" id="prev">&#171;</a>
                    <a href="" class="btn" id="close">X</a>
                    <img src="https://github.com/Rafalesson/AdoteAqui/blob/main/IMG/Gato1.jpg?raw=true" />
                    <a href="#img5" class="btn" id="next">&#187;</a>
                </section>
            </section>

            <section class="lbox" id="img5">
                <section class="box_img">
                    <a href="#img4" class="btn" id="prev">&#171;</a>
                    <a href="" class="btn" id="close">X</a>
                    <img src="https://github.com/Rafalesson/AdoteAqui/blob/main/IMG/Cachorro8.jpg?raw=true" />
                    <a href="#img1" class="btn" id="next">&#187;</a>
                </section>
            </section>
        </main>
    )
}
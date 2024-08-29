import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DetailItem {
  icon: string;
  text: string;
}

interface Slide {
  title: string;
  description: string;
  imageUrl: string;
  details?: DetailItem[];
}

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  slides: Slide[] = [
    {
      title: 'Educación, Ciencia y Divulgación Matemática',
      description: 'Detalles del evento:',
      imageUrl: 'assets/image2.png',
      details: [
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pin-filled" width="52" height="52" viewBox="0 0 24 24" stroke-width="0.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M15.113 3.21l.094 .083l5.5 5.5a1 1 0 0 1 -1.175 1.59l-3.172 3.171l-1.424 3.797a1 1 0 0 1 -.158 .277l-.07 .08l-1.5 1.5a1 1 0 0 1 -1.32 .082l-.095 -.083l-2.793 -2.792l-3.793 3.792a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.792 -3.793l-2.792 -2.793a1 1 0 0 1 -.083 -1.32l.083 -.094l1.5 -1.5a1 1 0 0 1 .258 -.187l.098 -.042l3.796 -1.425l3.171 -3.17a1 1 0 0 1 1.497 -1.26z" stroke-width="0" fill="currentColor" />
                </svg>`,
          text: 'Lugar: Instituto Tecnológico Superior Sudamericano'
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-24" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M3 12a9 9 0 0 0 5.998 8.485m12.002 -8.485a9 9 0 1 0 -18 0" />
                  <path d="M12 7v5" />
                  <path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
                  <path d="M18 15v2a1 1 0 0 0 1 1h1" />
                  <path d="M21 15v6" />
                </svg>`,
          text: 'Hora: 08:00 AM - 05:00 PM'
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-filled" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M16 2a1 1 0 0 1 .993 .883l.007 .117v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 1.993 -.117l.007 .117v1h6v-1a1 1 0 0 1 1 -1zm3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16v-9.625z" stroke-width="0" fill="currentColor" />
                  <path d="M12 12a1 1 0 0 1 .993 .883l.007 .117v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor" />
                </svg>`,
          text: 'Fecha: 30 de Noviembre, 2024'
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-coin" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                  <path d="M12 7v10" />
                </svg>`,
          text: 'Evento Gratuito + certificado'
        }
      ]
    },
    {
      title: 'Educación',
      description: 'A través del aprendizaje de conceptos matemáticos, los estudiantes adquieren las herramientas necesarias para diseñar algoritmos, optimizar sistemas y manejar grandes volúmenes de datos.',
      imageUrl: 'assets/image3.png',
    },
    {
      title: 'Ciencia',
      description: 'Actúa como un lenguaje universal que permite modelar, analizar y mejorar sistemas complejos. Su aplicación permite el desarrollo de <br> tecnologías avanzadas y contribuye a la creación de soluciones innovadoras en software.',
      imageUrl: 'assets/image4.png',
    },
    {
      title: 'Divulgacion Matemática',
      description: 'A través de la divulgación, se busca <br> explicar de manera clara y comprensible los conceptos matemáticos fundamentales para <br> crear algoritmos y mejorar la seguridad en los sistemas digitales.',
      imageUrl: 'assets/image4.png'
    }
  ];

  currentSlide = 0;

  ngOnInit(): void {}

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}

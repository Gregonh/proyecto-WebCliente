import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.component.html',
  styleUrls: ['./netflix.component.scss']
})
export class NetflixComponent implements OnInit {

  series: any[];
  responder: boolean;
  res: any;

  constructor() {
    const serie1 = {

      titulo: "Breaking Bad",
      ano: "1992",
      cuerpo: 'serie de walter white',
      emisor: 'serieEmisor1@oseries.es',
      visto: true,
      imagen: 'https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg',
    };
    const serie2 = {

      titulo: "Walking Dead",
      ano: "1992",
      cuerpo: `Serie de zombies`,
      emisor: 'serieEmisor1@oseries.es',
      visto: false,

      imagen: 'https://www.diariodesevilla.es/2019/03/08/comics/Rick-trata-contener-horda-zombis_1334577174_96170376_667x375.jpg',
    };
    this.series = [];
    this.series.push(serie1);
    this.series.push(serie2);

    this.series.push({
      titulo: "South Park",
      ano: "2000",
      cuerpo: `una serie guay`,
      emisor: 'serieEmisor1@oseries.es',
      visto: false,
      imagen: 'https://cafetoons.net/wp-content/uploads/2019/09/south-park.png',
    });

    this.series.push({
      titulo: "Los Simpson",
      ano: "1990",
      cuerpo: `una serie genial`,
      emisor: 'serieEmisor1@oseries.es',
      visto: false,
      imagen: 'https://phantom-elmundo.unidadeditorial.es/90a2bd6f57520852e4fb927c7bc7de9d/crop/97x0/1171x717/resize/746/f/jpg/assets/multimedia/imagenes/2020/04/22/15875822956642.jpg',
    });
  }


  ngOnInit(): void {

  }

  clickResponder(serie) {
    //this.responder = !this.responder;
    //this.serieAResponder = serie;
    serie.responder = !serie.responder;
    console.log(serie.responder);
  }

  accionRespuestaRapida(serie) {
    serie.responder = false;
    console.log("accion rapida");
  }

  accionRapidaEnviar(event) {
    this.res = event;
  }

}


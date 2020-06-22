import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  comentario: FormGroup;
  submitted = false;
  @Input() serie: any;
  @Output() accionRealizada: EventEmitter<any> = new EventEmitter();
  @Output() accionEnviar: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.comentario = this.formBuilder.group({
      titulo: [''],
      emisor: ['', [Validators.required, Validators.email]],
      puntuacion: ['', [Validators.required]],
      cuerpo: ['', [Validators.required, Validators.minLength(10)]],
    });

    if (this.serie != undefined) {
      this.comentario.patchValue({
        titulo: this.serie.titulo,
        emisor: this.serie.emisor
      });
    }
  }

  get formulario() { return this.comentario.controls; }



  onSubmit() {
    this.submitted = true; // para enseñar los errores

    if (this.comentario.invalid) {
      return;
    }

    let serie = this.comentario.value;

    this.serie.respondido = true;
    let respuesta = serie.cuerpo;
    this.accionEnviar.emit(respuesta);

    alert("Comentario enviado.");
    this.onReset();
  }

  onReset() {
    this.submitted = false;
    this.comentario.reset(); //resetear el formulario
    this.accionRealizada.emit(); // emite el reseteo llamando a accionRespuestaRapida de netflix.
  }

}

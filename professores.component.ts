import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  public modalRef: BsModalRef;
  public profForm: FormGroup;
  public titulo = 'Professores';
  public profSelecionado: Professor;

  public professores = [
    { id: 1, nome: 'Elba', sobrenome: 'Tiuma', diciplina: 'matematica' },
    { id: 2, nome: 'Cuca', sobrenome: 'Beludo', diciplina: 'fisica' },
    { id: 3, nome: 'Botelho', sobrenome: 'Kunavara', diciplina: 'portugues' },
    { id: 4, nome: 'Jacinto', sobrenome: 'Pinto', diciplina: 'ingles' },
    { id: 5, nome: 'Paul', sobrenome: 'Herguido', diciplina: 'biologia' },
    { id: 6, nome: 'Beijamin', sobrenome: 'Arrola', diciplina: 'quimica' },
    { id: 7, nome: 'Sheila', sobrenome: 'Meusako', diciplina: 'educação fisica' },
  ];

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService) {
    this.createForm();
  }

  ngOnInit(): void{
  }

  createForm(){
    this.profForm = this.fb.group({
      id: ['0'],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      diciplina: ['', Validators.required]
    });
  }

  profSubmit(){
    console.log(this.profForm.value);
  }

  profSelect(prof: Professor){
    this.profSelecionado = prof;
    this.profForm.patchValue(prof);
  }

  voltar(){
    this.profSelecionado = null;
  }
}

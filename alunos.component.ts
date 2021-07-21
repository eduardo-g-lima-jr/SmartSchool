import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;

  public alunos = [
    { id: 1, nome: 'Oscar', sobrenome: 'Alho', telefone: '88783120' },
    { id: 2, nome: 'Paula', sobrenome: 'Tejando', telefone: '333333333' },
    { id: 3, nome: 'Thomas', sobrenome: 'Turbando', telefone: '123456721' },
    { id: 4, nome: 'Jacinto', sobrenome: 'Pinto', telefone: '2345675978' },
    { id: 5, nome: 'Paul', sobrenome: 'Herguido', telefone: '2345675978' },
    { id: 6, nome: 'Beijamin', sobrenome: 'Arrola', telefone: '123123' },
    { id: 7, nome: 'Sheila', sobrenome: 'Meusako', telefone: '5676766767' }
  ];

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, 
              private modalService: BsModalService) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm(){
    this.alunoForm = this.fb.group({
      id: ['0'],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit(){
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
    this.alunoSelecionado = null;
  }
}

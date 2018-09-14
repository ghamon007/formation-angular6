import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypePrestation } from '../../../shared/enums/type-prestation.enum';
import { StatePrestation } from '../../../shared/enums/state-prestation.enum';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from '../../../shared/models/prestation';
import { Router } from '@angular/router';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {HttpClientModule, HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  form: FormGroup;
  statePrestations = Object.values(StatePrestation);
  typePrestations = Object.values(TypePrestation);
  http: HttpClient;

  constructor(private fb: FormBuilder, private prestationService: PrestationService, private router: Router, private http: HttpClient) {

  }

  ngOnInit() {
    this.createForm();
  }
  createForm(): void {
    this.form = this.fb.group({
      id: ['', Validators.required],
      type: [TypePrestation.FORMATION, Validators.required],
      client: ['', Validators.required],
      date_debut: new Date().toISOString(),
      date_fin: '',
      tjm_ht: ['100', Validators.min(100)],
      nb_jours: [0, Validators.compose([Validators.max(200), Validators.min(5)])],
      state: StatePrestation.OPTION,
      taxe: 20 // 20%
    });
    this.form.get('nb_jours').valueChanges.subscribe( (data) => console.log(data));

this.form.get('nb_jours').valueChanges
   .pipe( debounceTime(4000),
   distinctUntilChanged(),
   map()
   .subscribe( (data) => console.log(data));
  }

  getPost(id) {
    return this.htt;
  }

   public isError(fieldname: string): boolean {
    return this.form.get(fieldname).invalid && this.form.get(fieldname).touched;
  }

  register(): void {
    console.log(this.form);
    this.prestationService.collection.push(new Prestation(this.form.value));
    this.form.reset();
    this.router.navigate(['prestations']);
  }

}

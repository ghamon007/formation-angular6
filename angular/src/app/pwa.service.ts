import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { tap } from 'rxjs/operators';
import { interval } from 'rxjs';


@Injectable({
 providedIn: 'root'
})
export class PwaService {

 constructor(private privateupdate: SwUpdate) {



   // vérifie simplement la présence d'une nouvelle version sans l'installer
   interval(1000 * 10).subscribe( () => {

    console.log('...checkForUpdate()...');

    this.privateupdate.checkForUpdate();

  });


   this.privateupdate.available
   .pipe(tap(() => console.log('--- available ----')))
   .subscribe( version => {
     if (version) {
     console.log('La version actuelle est ' , version.current);
     console.log('La dernière version disponible est' , version.available );
     this.privateupdate.activateUpdate().then( () => window.location.reload() );

   }
   });

   this.privateupdate.activated.subscribe( version => {
     console.log('L\'ancienne version était ', version.previous);
     console.log('La nouvelle version est ', version.current);
   });

  }
}

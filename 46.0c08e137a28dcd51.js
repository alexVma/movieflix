"use strict";(self.webpackChunkmovieflix=self.webpackChunkmovieflix||[]).push([[46],{46:(P,s,a)=>{a.r(s),a.d(s,{MoviesModule:()=>y});var r=a(814),e=a(946);let m=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez]}),l})();var c=a(472);let d=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-nav"]],decls:2,vars:0,template:function(n,i){1&n&&(e.TgZ(0,"p"),e._uU(1,"nav works!"),e.qZA())}}),l})(),f=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-layout"]],decls:2,vars:0,template:function(n,i){1&n&&e._UZ(0,"app-nav")(1,"router-outlet")},dependencies:[d,c.lC]}),l})();var p=a(862);let v=(()=>{var t;class l{constructor(n){this.http=n,this.apiUrl="https://api.themoviedb.org/3",this.httpOptions={headers:new p.WM({Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmQxN2E1MjdkNmMzMThlM2VhZmNiOWMxYTE4MTNhYyIsInN1YiI6IjVjZmE4MzAyOTI1MTQxNjczN2MxZWM1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7fjGIjIuVoHVrG1by8RjJ2g2rAzIxXOCEzkKV9AHPqg"})}}obtenerPeliculas(){return this.http.get(this.apiUrl+"/trending/movie/day?language=en-US",this.httpOptions)}}return(t=l).\u0275fac=function(n){return new(n||t)(e.LFG(p.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),l})();function h(t,l){if(1&t){const o=e.EpF();e.TgZ(0,"div",2)(1,"h2",3),e._uU(2),e.qZA(),e._UZ(3,"img",4),e.TgZ(4,"p",5),e._uU(5),e.qZA(),e.TgZ(6,"p",6),e._uU(7),e.qZA(),e.TgZ(8,"button",7),e.NdJ("click",function(){const C=e.CHM(o).$implicit,x=e.oxw();return e.KtG(x.verDetalle(C.id))}),e._uU(9,"Ver Detalle"),e.qZA()()}if(2&t){const o=l.$implicit;e.xp6(2),e.Oqu(o.title),e.xp6(1),e.MGl("alt","",o.title," Poster"),e.Q6J("src","https://image.tmdb.org/t/p/w500/"+o.poster_path,e.LSH),e.xp6(2),e.Oqu(o.overview),e.xp6(2),e.hij("Porcentaje de aprobaci\xf3n: ",o.vote_average,"")}}const g=[{path:"",component:f,children:[{path:"",redirectTo:"peliculas",pathMatch:"full"},{path:"peliculas",component:(()=>{var t;class l{constructor(n,i){this.peliculasService=n,this.router=i,this.peliculas=[]}ngOnInit(){this.peliculasService.obtenerPeliculas().subscribe({next:n=>{this.peliculas=n.results}})}verDetalle(n){this.router.navigate([`/pelicula/${n}`])}}return(t=l).\u0275fac=function(n){return new(n||t)(e.Y36(v),e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-peliculas"]],decls:2,vars:1,consts:[[1,"pelicula-list"],["class","pelicula",4,"ngFor","ngForOf"],[1,"pelicula"],[1,"pelicula-title"],["height","300",1,"pelicula-poster",3,"src","alt"],[1,"pelicula-overview"],[1,"pelicula-rating"],[3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.YNc(1,h,10,5,"div",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngForOf",i.peliculas))},dependencies:[r.sg],styles:["body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f0f0f0;margin:0;padding:0}.pelicula-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;justify-content:center;padding:20px}.pelicula[_ngcontent-%COMP%]{background-color:#fff;border-radius:5px;box-shadow:0 2px 4px #0000001a;padding:20px;max-width:300px;text-align:center}.pelicula-title[_ngcontent-%COMP%]{font-size:1.5rem;margin-top:0}.pelicula-overview[_ngcontent-%COMP%]{font-size:1rem;color:#555}.pelicula-rating[_ngcontent-%COMP%]{font-size:.9rem;margin-top:10px;color:#007bff}"]}),l})()},{path:"pelicula/:id",component:(()=>{var t;class l{constructor(){this.pelicula=null}ngOnInit(){}}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-pelicula"]],decls:2,vars:0,template:function(n,i){1&n&&(e.TgZ(0,"p"),e._uU(1,"pelicula works!"),e.qZA())}}),l})()}]}];let M=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(g),c.Bz]}),l})(),y=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez,m,M]}),l})()}}]);
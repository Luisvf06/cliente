import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiKey: string = '4431fed8390b02d6c28655feb536156a';
  private peliculasSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public peliculas$: Observable<any[]> = this.peliculasSubject.asObservable();
  private rangoPopularidad: BehaviorSubject<number> = new BehaviorSubject(0);
  private ordenacion: BehaviorSubject<string> = new BehaviorSubject('none');

  constructor(private http: HttpClient) {}

  private realizarBusquedaAPI(cadena: string): void {
    this.http
      .get<{results: any[]}>(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${cadena}`)
      .subscribe({
        next: (data) => {
          this.peliculasSubject.next(data.results);
        },
        error: (error) => console.error('Error al buscar películas:', error),
      });
  }

  public searchMovies(cadena: string): Observable<any[]> {
    if (cadena) {
      this.realizarBusquedaAPI(cadena);
    } else {
      this.peliculasSubject.next([]);
    }
    return this.peliculas$;
  }

  public getImagenPelicula(rutaPoster: string): string | undefined {
    return rutaPoster ? `https://image.tmdb.org/t/p/w500/${rutaPoster}` : undefined;
  }

  public getPeliculasFiltradas(): Observable<any[]> {
    return this.peliculas$.pipe(
      map((peliculas) =>
        peliculas.filter((pelicula) => pelicula.vote_average >= this.rangoPopularidad.value)
      )
    );
  }
  getPopularMovies(): Observable<any[]> {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing?api_key=4431fed8390b02d6c28655feb536156a')
      .pipe(map(response => response.results));
  }
  
  public setRangoPopularidad(valor: number): void {
    this.rangoPopularidad.next(valor);
  }

  public ordenarPeliculas(tipo: string): void {
    this.ordenacion.next(tipo);
    let peliculasOrdenadas = this.peliculasSubject.getValue();
    if (tipo === 'asc') {
      peliculasOrdenadas.sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
    } else if (tipo === 'desc') {
      peliculasOrdenadas.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
    }
    this.peliculasSubject.next(peliculasOrdenadas);
  }
}

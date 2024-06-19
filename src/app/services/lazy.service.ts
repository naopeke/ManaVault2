import { Injectable, Type, Injector, inject } from '@angular/core';
import { Observable, defer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LazyService {
  private injector: Injector;

  constructor() { 
    this.injector = inject(Injector);
  }

  //The RxJS defer operator uses a factory function to create an Observable that, upon subscription, executes the factory function to generate set Observable. This means the creation of the Observable and its side effects are deferred until subscription time. This is useful when you want to ensure that the Observable logic is executed only when there is an actual subscription 
  //lazyService関数を利用して、必要なサービスを遅延ロードし、コンポーネント内でそのサービスを利用することができます。このアプローチにより、アプリケーションの初期ロード時間を短縮し、必要なときにのみリソースをロードすることが可能になります。
  lazyLoad<T>(loader:() => Promise<Type<T>>): Observable<T> {
    return defer (() => {
      return loader().then(service => this.injector.get(service));
    });
  }
}

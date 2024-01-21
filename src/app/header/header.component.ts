import { Component } from '@angular/core';
import { map, withLatestFrom } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CityWeather } from '../weather/model/cityWeather';
import { HotToastService } from '@ngneat/hot-toast';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AppQuery } from '../../state/app.query';
import { WeatherService } from '../weather/weather.service';

@Component({
	selector: 'cb-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	constructor(
		private toastService: HotToastService,
		private angularFireAuth: Auth,
		private router: Router,
		private appQuery: AppQuery,
		private weatherService: WeatherService
	) {}

	firebaseUser$ = this.appQuery.select('user');
	userData$ = this.appQuery.select('userData');
	family$ = this.userData$.pipe(
		map((userData) => {
			if (userData?.familyName && userData.isAllowedInFamily) {
				return userData?.familyName;
			}
			return undefined;
		})
	);

	weather$: Observable<CityWeather> = this.weatherService.weather$;
	weatherTemp$: Observable<number> = this.weatherService.temperature$;
	weatherIconUrl$ = this.weatherService.weatherIconUrl$;
	weatherTooltip$ = this.weather$.pipe(
		withLatestFrom(this.weatherTemp$),
		map(([weatherData, temp]) => `${weatherData.weather[0]?.description} • ${temp}°C`)
	);

	logout() {
		this.angularFireAuth.signOut().then(() => {
			this.toastService.info('Déconnecté', {
				duration: 3000,
			});
			this.router.navigateByUrl('/login');
		});
	}
}
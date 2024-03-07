import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CityWeather } from './model/cityWeather';
import { map, withLatestFrom } from 'rxjs/operators';
import { WeatherService } from './weather.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { tuiFadeIn, TuiHintModule } from '@taiga-ui/core';

@Component({
	selector: 'cb-weather',
	standalone: true,
	imports: [CommonModule, HttpClientModule, TuiHintModule],
	templateUrl: './weather.component.html',
	styleUrl: './weather.component.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [WeatherService],
	animations: [tuiFadeIn],
})
export class WeatherComponent {
	constructor(private readonly weatherService: WeatherService) {}

	readonly weather$: Observable<CityWeather> = this.weatherService.weather$;
	readonly weatherTemp$: Observable<number> = this.weatherService.temperature$;
	readonly weatherIconUrl$ = this.weatherService.weatherIconUrl$;

	readonly weatherTooltip$ = this.weather$.pipe(
		withLatestFrom(this.weatherTemp$),
		map(([weatherData, temp]) => `${weatherData.weather[0]?.description} • ${temp}°C`)
	);
}

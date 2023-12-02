import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatRippleModule } from '@angular/material/core';
import { MatLegacyOptionModule as MatOptionModule } from '@angular/material/legacy-core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { DomSanitizer } from '@angular/platform-browser';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatExpansionModule } from '@angular/material/expansion';

const components: Array<any> = [];

const modules = [
	CommonModule,
	FormsModule,
	RouterModule,
	ReactiveFormsModule,
	HttpClientModule,
	FlexLayoutModule,
	MatTooltipModule,
	MatCardModule,
	MatRippleModule,
	MatButtonModule,
	MatIconModule,
	MatFormFieldModule,
	MatInputModule,
	MatDividerModule,
	MatChipsModule,
	MatDialogModule,
	MatBottomSheetModule,
	MatAutocompleteModule,
	MatOptionModule,
	MatProgressSpinnerModule,
	MatCheckboxModule,
	MatMenuModule,
	MatExpansionModule,
	DragDropModule,
	LayoutModule,
	MatListModule,
];

@NgModule({
	declarations: [...components],
	imports: [...modules],
	exports: [...components, ...modules],
})
export class SharedModule {
	constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
		this.matIconRegistry.addSvgIcon(
			`jow`,
			this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/jow-logo.svg`)
		);
	}
}

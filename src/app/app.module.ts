import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TrackChangesAdapterComponent } from './track-changes-adapter/track-changes-adapter.component';
import { LoadSaveIntegrationComponent } from './load-save-integration/load-save-integration.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RevisionHistoryAdapterComponent } from './revision-history-adapter/revision-history-adapter.component';
import { MergeRichtextComponent } from './merge-richtext/merge-richtext.component';
import { CoreService } from './core.service';
import { RichTextDiffComponent } from './rich-text-diff/rich-text-diff.component';


@NgModule({
  declarations: [
		AppComponent,
		TrackChangesAdapterComponent,
		LoadSaveIntegrationComponent,
		RevisionHistoryAdapterComponent,
		MergeRichtextComponent,
		MenuComponent,
		RichTextDiffComponent
	],
  imports: [
		BrowserModule,
		CKEditorModule,
		RouterModule,
		AppRoutingModule
	],
  providers: [CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadSaveIntegrationComponent } from './load-save-integration/load-save-integration.component';
import { TrackChangesAdapterComponent } from './track-changes-adapter/track-changes-adapter.component';
import { MenuComponent } from './menu/menu.component';
import { RevisionHistoryAdapterComponent } from './revision-history-adapter/revision-history-adapter.component';
import { MergeRichtextComponent } from './merge-richtext/merge-richtext.component';
import { RichTextDiffComponent } from './rich-text-diff/rich-text-diff.component';

const routes: Routes = [
	{ path: '', component: MenuComponent },
	{ path: 'load-save-integration', component: LoadSaveIntegrationComponent },
	{ path: 'track-changes-adapter', component: TrackChangesAdapterComponent },
	{ path: 'revision-history-adapter', component: RevisionHistoryAdapterComponent },
	{ path: 'merge-richtext-adapter', component: MergeRichtextComponent },
	{ path: 'rich-text-diff', component: RichTextDiffComponent }
];

@NgModule( {
	imports: [ RouterModule.forRoot( routes ) ],
	exports: [ RouterModule ]
} )
export class AppRoutingModule { }

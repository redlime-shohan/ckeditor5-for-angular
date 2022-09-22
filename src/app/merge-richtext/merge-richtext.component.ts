/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { AfterViewInit, OnDestroy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditorBuild from '../../../vendor/ckeditor5/build/classic-editor-with-revision-history.js';
import { getMergeRichtextAdapter } from './merge-richtext';

@Component({
	selector: 'merge-richtext',
	templateUrl: './merge-richtext.component.html',
	styleUrls: ['./merge-richtext.component.css']
})
export class MergeRichtextComponent implements AfterViewInit, OnDestroy {
	@Output() public ready = new EventEmitter<CKEditor5.Editor>();
	@ViewChild('sidebar', { static: true }) private sidebarContainer?: ElementRef<HTMLDivElement>;

	public Editor = ClassicEditorBuild.ClassicEditorWithRevisionHistory;
	public editor?: CKEditor5.Editor;

	public data = this.getInitialData();

	public get editorConfig() {
		return {
			extraPlugins: [
				getMergeRichtextAdapter(this.appData)
			],
			sidebar: {
				container: this.sidebar
			},
			licenseKey: this.licenseKey,
			revisionHistory: {
				editorContainer: document.querySelector('#editor-container'),
				viewerContainer: document.querySelector('#revision-viewer-container'),
				viewerEditorElement: document.querySelector('#revision-viewer-editor'),
				viewerSidebarContainer: document.querySelector('#revision-viewer-sidebar')
			},
			collaboration: {
				channelId: 'document-1'
			},
			autosave: {
				save: editor => {
					debugger
					const revisionTracker = editor.plugins.get('RevisionTracker');

					return revisionTracker.update();
				}
			}
		};
	}

	private readonly STORAGE_KEY = 'wG5uqCDvWAAvknR9Nswy0Mm5aAFcGPu5Fg73ayMwaGlzQ3ZtyE4WvARpBw==';
	private licenseKey = '';

	private appData = {
		// The ID of the current user.
		userId: 'u1',
		// Users data.
		users: [
			{
				id: 'u1',
				name: 'Joe Doe',
				// Note that the avatar is optional.
				avatar: 'https://randomuser.me/api/portraits/thumb/men/26.jpg'
			},
			{
				id: 'u2',
				name: 'Ella Harper',
				avatar: 'https://randomuser.me/api/portraits/thumb/women/65.jpg'
			}
		],
		// Suggestion threads data.
		suggestions: [
		],
		// Comment threads data.
		commentThreads: [
		]
	};

	// Note that Angular refs can be used once the view is initialized so we need to create
	// this container and use in the above editor configuration to work around this problem.
	private sidebar = document.createElement('div');

	private boundRefreshDisplayMode = this.refreshDisplayMode.bind(this);
	private boundCheckPendingActions = this.checkPendingActions.bind(this);

	public ngOnInit(): void {
		(window as any).CKBox = ClassicEditorBuild.CKBox;
		// Save the provided license key in the local storage.
		this.licenseKey = window.localStorage.getItem(this.STORAGE_KEY) || window.prompt('wG5uqCDvWAAvknR9Nswy0Mm5aAFcGPu5Fg73ayMwaGlzQ3ZtyE4WvARpBw==');
		window.localStorage.setItem(this.STORAGE_KEY, this.licenseKey);
	}

	public ngAfterViewInit(): void {
		if (!this.sidebarContainer) {
			throw new Error('Div container for sidebar was not found');
		}

		this.sidebarContainer.nativeElement.appendChild(this.sidebar);
	}

	public ngOnDestroy(): void {
		window.removeEventListener('resize', this.boundRefreshDisplayMode);
		window.removeEventListener('beforeunload', this.boundCheckPendingActions);
	}

	public onReady(editor: CKEditor5.Editor): void {
		this.editor = editor;
		this.ready.emit(editor);

		// Prevent closing the tab when any action is pending.
		window.addEventListener('beforeunload', this.boundCheckPendingActions);

		// Switch between inline and sidebar annotations according to the window size.
		window.addEventListener('resize', this.boundRefreshDisplayMode);
		this.refreshDisplayMode();
	}

	public resetLicenseKey(): void {
		window.localStorage.removeItem(this.STORAGE_KEY);
		window.location.reload();
	}

	private checkPendingActions(domEvt): void {
		if (this.editor.plugins.get('PendingActions').hasAny) {
			domEvt.preventDefault();
			domEvt.returnValue = true;
		}
	}

	public showEditorDataInConsole(evt): void {
		const editorData = this.editor.data.get();

		const trackChanges = this.editor.plugins.get('TrackChanges');
		const comments = this.editor.plugins.get('CommentsRepository');
		const revisionsRepositoryPlugin = this.editor.plugins.get('RevisionsRepository');

		const revisionsData = revisionsRepositoryPlugin.getRevisions();
		const suggestionsData = trackChanges.getSuggestions();
		const commentThreadsData = comments.getCommentThreads({
			skipNotAttached: true,
			skipEmpty: true
		});

		console.log('Editor data:');
		console.log(editorData);
		console.log('Suggestions data:');
		console.log(suggestionsData);
		console.log('Comment threads data:');
		console.log(commentThreadsData);
		console.log('Revisions data:');
		console.log(revisionsData);

		evt.preventDefault();
	}

	private refreshDisplayMode(): void {
		const annotationsUIs = this.editor.plugins.get('AnnotationsUIs');
		const sidebarElement = this.sidebarContainer.nativeElement;

		if (window.innerWidth < 1070) {
			sidebarElement.classList.remove('narrow');
			sidebarElement.classList.add('hidden');
			annotationsUIs.switchTo('inline');
		}
		else if (window.innerWidth < 1300) {
			sidebarElement.classList.remove('hidden');
			sidebarElement.classList.add('narrow');
			annotationsUIs.switchTo('narrowSidebar');
		}
		else {
			sidebarElement.classList.remove('hidden', 'narrow');
			annotationsUIs.switchTo('wideSidebar');
		}
	}

	// private getInitialData(): string {
	// 	return `
	// 	<figure class="image">
	// 	<img src="assets/images/revision-history-demo.png">
	// 	</figure>
	// 	<h1>PUBLISHING AGREEMENT</h1>
	// 	<h3>Introduction</h3>
	// 	<p>This publishing contract, the “contract”, is entered into as of 1st June 2020 by and between The Lower Shelf, the “Publisher”, and John Smith, the “Author”.</p>
	// 	<h3>Grant of Rights</h3>
	// 	<p>The Author grants the Publisher full right and title to the following, in perpetuity:</p>
	// 	<ul>
	// 		<li>To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future.</li>
	// 		<li>To create or devise modified, abridged, or derivative works based on the works listed.</li>
	// 		<li>To allow others to use the listed works at their discretion, without providing additional compensation to the Author.</li>
	// 	</ul>
	// 	<p>These rights are granted by the Author on behalf of him and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future.</p>
	// 	<p>Any rights not granted to the Publisher above remain with the Author.</p>
	// 	<p>The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature.</p>
	// 	`;
	// }

	private getInitialData(): string {
		return `
		<h2>
				Bilingual Personality Disorder
			</h2>
			<figure class="image image-style-side">
				<img src="https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder.jpg" srcset="https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder.jpg, https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder_2x.jpg 2x">
				<figcaption>
					One language, one person.
				</figcaption>
			</figure>
			<p>
				This may be the first time you hear about this made-up disorder but it
				<suggestion-start name="insertion:suggestion-1:user-2"></suggestion-start>actually<suggestion-end name="insertion:suggestion-1:user-2"></suggestion-end>
				isn’t so far from the truth. Even the studies that were conducted almost half a century show
				that <strong>the language you speak has more effects on you than you realize</strong>.
			</p>
			<p>
				One of the very first experiments conducted on this topic dates back to 1964.
				<a href="https://www.researchgate.net/publication/9440038_Language_and_TAT_content_in_bilinguals">In the experiment</a>
				designed by linguist Ervin-Tripp who is an
				<suggestion-start name="deletion:suggestion-2:user-1"></suggestion-start>
				authority<suggestion-end name="deletion:suggestion-2:user-1">
				</suggestion-end>
				<suggestion-start name="insertion:suggestion-3:user-1"></suggestion-start>
				expert<suggestion-end name="insertion:suggestion-3:user-1"></suggestion-end>
				in psycholinguistic and sociolinguistic studies, adults who are bilingual
				in English in French were showed series of pictures and were asked to create 3-minute stories.
				In the end participants emphasized
				drastically different dynamics for stories in English and French.
			</p>
			<p>
				Another ground-breaking experiment which included bilingual Japanese women married to American men
				<suggestion-start name="deletion:suggestion-4:user-1"></suggestion-start>in San
				Francisco <suggestion-end name="deletion:suggestion-4:user-1">
				</suggestion-end>were
				asked to complete sentences. The goal of the experiment was to investigate whether or not human
				feelings and thoughts
				are expressed differently in <strong>different language mindsets</strong>.
			</p>
			<p data-suggestion-start-before="formatBlock:698dn3otqzd6:suggestion-6:user-2">
				Here is a sample from the the experiment:
				<suggestion-end name="formatBlock:698dn3otqzd6:suggestion-6:user-2"></suggestion-end>
			</p>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>English</th>
						<th>Japanese</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Real friends should</td>
						<td>Be very frank</td>
						<td>Help each other</td>
					</tr>
					<tr>
						<td>I will <suggestion-start name="formatInline:886cqig6g8rf:suggestion-5:user-2"></suggestion-start>probably<suggestion-end name="formatInline:886cqig6g8rf:suggestion-5:user-2" suggestion-type="formatInline:886cqig6g8rf"></suggestion-end> become</td>
						<td>A teacher</td>
					<td>A housewife</td>
					</tr>
					<tr>
						<td>When there is a conflict with family</td>
						<td>I do what I want</td>
						<td>It's a time of great unhappiness</td>
					</tr>
				</tbody>
			</table>
			<p>
				More recent <a href="https://books.google.pl/books?id=1LMhWGHGkRUC">studies</a> show, the
				language a person speaks affects
				their cognition, behavior, emotions and hence <strong>their personality</strong>.
				This shouldn’t come as a surprise
				<a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since we already know</a>
				that different regions of the brain become more active depending on the person’s activity at hand.
				The structure, information and especially <strong>the culture</strong> of languages varies
				substantially and the language a person speaks is an essential element of daily life.
			</p>
`;
	}
}


/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { AfterViewInit, OnDestroy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular';
import ClassicEditorBuild from '../../../vendor/ckeditor5/build/classic-editor-with-revision-history.js';
//import ClassicEditorBuild from '../../../vendor/ckeditor5/src/classic-editor-with-revision-history.js';
import { CoreService } from '../core.service.js';
import { getLoadSaveIntegration } from './load-save-integration';

@Component({
	selector: 'load-save-integration',
	templateUrl: './load-save-integration.component.html',
	styleUrls: ['./load-save-integration.component.css'],
	providers: [CoreService]
})
export class LoadSaveIntegrationComponent implements AfterViewInit, OnDestroy {

	private suggetionList = [];
	private revisionList = [];
	private commentList = [];
	public data = '';
	constructor(public coreService: CoreService) {

		this.suggetionList = this.coreService.getSuggetionList();
		this.revisionList = this.coreService.getRevisionList();
		this.commentList = this.coreService.getCommentList();
		this.data = this.coreService.getArticle();
	}


	@Output() public ready = new EventEmitter<CKEditor5.Editor>();
	@ViewChild('sidebar', { static: true }) private sidebarContainer?: ElementRef<HTMLDivElement>;

	public Editor = ClassicEditorBuild.ClassicEditorWithRevisionHistory;
	public editor?: CKEditor5.Editor;





	private readonly STORAGE_KEY = 'wG5uqCDvWAAvknR9Nswy0Mm5aAFcGPu5Fg73ayMwaGlzQ3ZtyE4WvARpBw==';
	private licenseKey = '';

	// Application data will be available under a global variable `appData`.
	private appData = {};

	public get editorConfig() {
		let app_data = {
			// The ID of the current user.
			userId: 'u2',
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
			// // Suggestion threads data.
			// suggestions: [{
			// 	attributes: {},
			// 	authorId: "u1",
			// 	createdAt: "2022-09-26T09:35:32.465Z",
			// 	data: null,
			// 	hasComments: true,
			// 	id: "e63a26e476c87538082d20e860e615681",
			// 	type: "insertion",
			// }
			// ],
			suggestions: this.suggetionList || [],
			// Revisions data.
			revisions: this.revisionList || [],
			// // Comment threads data.
			// comments: [{
			// 	threadId: "e63a26e476c87538082d20e860e615681",
			// 	comments: [{
			// 		authorId: "u2",
			// 		commentId: "e27e8db12105c0ac514749cddaeb0d54f",
			// 		content: "Okay",
			// 		createdAt: "2022-09-26T09:35:39.487Z"
			// 	},
			// 	// {
			// 	// 	attributes: {},
			// 	// 	authorId: "u1",
			// 	// 	commentId: "e475e2dc73117bda27b034dd82e26a46d",
			// 	// 	content: "<p>dfsdfdsf</p>",
			// 	// 	createdAt: "2022-09-26T09:12:15.989Z"
			// 	// }
			// ]
			// }]

			comments: this.commentList || [],
		};
		return {
			extraPlugins: [
				getLoadSaveIntegration(app_data)
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
				save: async editor => {
					const revisionTracker = editor.plugins.get('RevisionTracker');

					await revisionTracker.update();

					const revisionData = revisionTracker.currentRevision.toJSON();
					const documentData = editor.getData();

					const saveData = async (documentData, revisionData) => {
						// Make a request to save the document and revision data in your database
						console.log('Saving data with autosave...');
						console.log({ documentData, revisionData });
						console.log('From Storage');
						console.log(this.coreService.getArticle());
						console.log(this.coreService.getRevisionList());

					};

					return saveData(documentData, revisionData);
				}
			}
		};
	}

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

		// Make the track changes mode the "default" state by turning it on right after the editor initializes.
		this.editor.execute('trackChanges');

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
		debugger
		const trackChanges = this.editor.plugins.get('TrackChanges');
		const comments = this.editor.plugins.get('CommentsRepository');
		const revisionsRepositoryPlugin = this.editor.plugins.get('RevisionsRepository');

		const revisionsData = revisionsRepositoryPlugin.getRevisions();
		const suggestionsData = trackChanges.getSuggestions();
		const commentThreadsData = comments.getCommentThreads();
		// {
		// 	skipNotAttached: true,
		// 	skipEmpty: false
		// });

		debugger

		let commentThreads = [];
		let rivisions = [];
		let suggestions = [];
		commentThreadsData.forEach(element => {
			commentThreads.push(element.toJSON());
		});

		revisionsData.forEach(element => {
			rivisions.push(element.toJSON());
		});

		suggestionsData.forEach(element => {
			suggestions.push(element.toJSON());
		});


		this.coreService.saveArticle(editorData);


		this.coreService.saveRevision(rivisions);
		this.coreService.saveSuggestion(suggestions);
		this.coreService.saveComment(commentThreads);

		suggestionsData.forEach(e => {
			console.log(e.toJSON())
		});
		console.log('XXXXXXXXXXXXXX');
		revisionsData.forEach(e => {
			console.log(e.toJSON())
		});

		console.log('XXXXXXXXXXXXXX');
		commentThreadsData.forEach(e => {
			console.log(e.toJSON())
		});



		// console.log('Editor data:');
		// console.log(editorData);
		// console.log('Suggestions data:');
		// console.log(suggestionsData);
		// console.log('Comment threads data:');
		// console.log(commentThreadsData);
		// console.log('Revisions data:');
		// console.log(revisionsData);

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
}

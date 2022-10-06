/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { CKEditor5 } from '@ckeditor/ckeditor5-angular';
import { CoreService } from '../core.service';

export function getLoadSaveIntegration(appData) {
	return class LoadSaveIntegration {
		public editor: CKEditor5.Editor;
		public coreService: CoreService;
		public constructor(editor: CKEditor5.Editor, coreService: CoreService) {
			this.editor = editor;
			this.coreService = coreService;
		}

		static get requires() {
			return ['RevisionHistory', 'TrackChanges', 'Comments'];
		}

		public async init() {
			const usersPlugin = this.editor.plugins.get('Users');
			const trackChangesPlugin = this.editor.plugins.get('TrackChanges');
			const commentsRepositoryPlugin = this.editor.plugins.get('CommentsRepository');
			const revisionHistory = this.editor.plugins.get('RevisionHistory');
			const revisions = appData.revisions || [];

			// Load the users data.
			for (const user of appData.users) {
				usersPlugin.addUser(user);
			}

			// Set the current user.
			usersPlugin.defineMe(appData.userId);



			// Load the suggestions data.
			for (const suggestion of appData.suggestions) {
				trackChangesPlugin.addSuggestion(suggestion);
			}
			
			// const commentsData = await this.getCommentListAsync();
			// // Load the comment threads data.
			// for (const commentThread of commentsData) {
			// 	debugger
			// 	commentThread.isFromAdapter = true;

			// 	commentsRepositoryPlugin.addCommentThread(commentThread);
			// }


			//debugger
			const revisionsData = await this.getRevisionListAsync();
			for (const revisionData of revisionsData) {
				revisionHistory.addRevisionData(revisionData);
			}




			// Set the adapter to the `TrackChanges#adapter` property.
			trackChangesPlugin.adapter = {
				getSuggestion: suggestionId => {
					// This function should query the database for data for a suggestion with a `suggestionId`.
					console.log('Get suggestion', suggestionId);

					return new Promise(resolve => {
						resolve(appData.suggestions.find(suggestion => suggestionId === suggestion.id));
					});
				},
				addSuggestion: suggestionData => {
					// This function should save `suggestionData` in the database.
					console.log('Suggestion added', suggestionData);

					return Promise.resolve({
						createdAt: new Date()		// Should be set server-side.
					});
				},
				updateSuggestion: (id, suggestionData) => {
					// This function should update `suggestionData` in the database.
					console.log('Suggestion updated', id, suggestionData);

					return Promise.resolve();
				}
			};

			revisionHistory.adapter = {

				getRevision: ({ revisionId }) => {
					debugger
					// Get revision data, based on its id.
					//
					// This should be an asynchronous request to your database. Do not dump your data here.
					// This is only for testing purposes to simulate data saved in the database.
					
					let revisionData = this.coreService.getRevisionList().filter(x => x.id == revisionId)[0];
					return Promise.resolve(revisionData);
				},

				updateRevisions: revisionsData => {
					debugger
					const documentData = this.editor.getData();


					console.log('Saving....');
					console.log('Revisions updated: ', revisionsData);
					console.log('Document data: ', documentData);
					console.log('Data saved.');

					// This should be an asynchronous request to your database
					// that saves `revisionsData` and `documentData`.
					//
					// `revisionsData` is an array with object, each object contains updated and new revisions.
					// See API reference to learn more.
					return Promise.resolve();
				}
			}

			// Track changes uses comments to allow discussing about the suggestions.
			// The comments adapter has to be defined as well.
			commentsRepositoryPlugin.adapter = {
				getCommentThread: ({ threadId }) => {
					// This function should query the database for data for the comment thread with a `commentThreadId`.
					debugger
					console.log('Get comment thread', threadId);
					let comments =  this.getCommentList();
					return new Promise(resolve => {
						resolve(comments.find(comment => threadId === comment.threadId));
					});
				},
				addComment: data => {
					debugger
					// This function should save `data` in the database.
					console.log('Comment added', data);
					return Promise.resolve({
						createdAt: new Date()		// Should be set server-side.
					});
				},
				updateComment: data => {
					debugger
					// This function should save `data` in the database.
					console.log('Comment updated', data);
					return Promise.resolve();
				},
				removeComment: data => {
					debugger
					// This function should remove the comment of a given `data` from the database.
					console.log('Comment removed', data);
					return Promise.resolve();
				},
				removeCommentThread: data => {
					debugger
					// This function should remove the comment of a given `data` from the database.
					console.log('Comment thread removed', data);
					return Promise.resolve();
				}
			};
			

		}




		public async getRevisionListAsync() {
			// Make an asynchronous call to your database.
			return Promise.resolve(
				JSON.parse(localStorage.getItem('revision')) || []
			);
		}

		public async getCommentListAsync() {
			// Make an asynchronous call to your database.
			return Promise.resolve(
				JSON.parse(localStorage.getItem('comment'))|| []
			);
		}

		public getCommentList() {
			// Make an asynchronous call to your database.
			return JSON.parse(localStorage.getItem('comment'))|| []
		}

	};
}

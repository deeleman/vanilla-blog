import { Component } from './ui.models';

export class ErrorComponent implements Component {
  compile(error: Error): string {
    return `
      <h2 class="app__error u-align-text--center p-heading--three">
        <i class="p-icon--error"></i> Ups! An Error occured:
        <br> ${error.message}
      </h2>
    `;
  }
}
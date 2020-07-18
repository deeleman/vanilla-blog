import { Component } from './ui.models';

export class ErrorComponent implements Component {
  compile(error: Error): string {
    return `
      <div class="app__error u-align-text--center">
        <h2 class="p-heading--three u-no-margin--bottom">
          Ups! An error occured
        </h2>
        <p class="p-heading--five app__error-description">${error.message}</p>
      </div>
    `;
  }
}

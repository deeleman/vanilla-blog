import { RawBlogPosts, Settings, HttpStatus } from './data.models';

/**
 * Fetches blog post entries from the remote data source given with pagination features
 * @param settings Settings instance object containing information about URL of remote API end point and pagination details
 */
export const fetchBlogPosts = (settings: Settings): Promise<RawBlogPosts> => {
  const { apiUrl, pageSize, pageIndex } = settings;
  const fullApiUrl = `${apiUrl}?per_page=${pageSize}&page=${pageIndex+1}&_embed=True`;

  return fetch(fullApiUrl)
    .then((response) => {
      if (response.ok && response.status >= HttpStatus.Success && response.status < HttpStatus.Redirect) {
        return response.json();
      } else {
        const errorMessage = !response.ok ? 'Invalid Response' : `Http Error ${response.status}`;
        throw new Error(errorMessage);
      }
    })
    .then((data) => data as RawBlogPosts)
    .catch((error) => Promise.reject(error))
};

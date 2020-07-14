import { Settings } from './data';

// Main settings file - edit data below at your convenience
const apiUrl =     'https://admin.insights.ubuntu.com/wp-json/wp/v2/posts';  // Remote data endpoint
const pageSize =    3;                                                       // Items per blog row
const pageIndex =   0;                                                       // Current page index (zero-based)

// Do not edit anything below this line
export default { apiUrl, pageSize, pageIndex } as Settings;
